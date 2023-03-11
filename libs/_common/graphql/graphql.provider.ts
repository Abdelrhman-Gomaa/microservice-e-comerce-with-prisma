import { User } from 'apps/auth/src/prisma-generate/user/user.model';
import { Injectable } from '@nestjs/common';
import { GqlOptionsFactory } from '@nestjs/graphql';
import { Request } from 'express';
import { join } from 'path';
import { ApolloDriverConfig } from '@nestjs/apollo';
import { ContextAuthService } from '../context/context-auth.service';

@Injectable()
export class GqlConfigService implements GqlOptionsFactory {
  constructor(
    private readonly authService: ContextAuthService,
  ) { }

  createGqlOptions(): ApolloDriverConfig {
    return {
      playground: true,
      introspection: true,
      debug: true,
      autoSchemaFile: join(process.cwd(), 'schema.gql'),
      cache: 'bounded',
      persistedQueries: false,
      csrfPrevention: true,
      // installSubscriptionHandlers: true,
      context: async ({ req, extra }) => {
        let currentUser: User;
        // Auth for subscription connections
        if (extra && extra.currentUser) currentUser = extra.currentUser;
        else currentUser = await this.authService.getUserFromReqHeaders(<Request>req);

        // Get lang and   country (if exist)
        let locale = this.authService.getLocale(req);

        return {
          req,
          currentUser,
          lang: locale.lang,
          country: locale.country,
          timezone: this.authService.getTimezone(undefined),
        };
      },
      subscriptions: {
        'graphql-ws': {
          onConnect: async context => {
            const { connectionParams, extra } = context;
            if (connectionParams) {
              const req = { headers: connectionParams };
              const currentUser = await this.authService.getUserFromReqHeaders(<Request>req);
              (extra as any).currentUser = currentUser;
            }
          }
        },
        'subscriptions-transport-ws': {
          onConnect: async connectionParams => {
            if (connectionParams) {
              const req = { headers: connectionParams };
              const currentUser = await this.authService.getUserFromReqHeaders(<Request>req);
              return {
                currentUser,
              };
            }
          },
          onDisconnect() { }
        }
      }
    };
  }
}
