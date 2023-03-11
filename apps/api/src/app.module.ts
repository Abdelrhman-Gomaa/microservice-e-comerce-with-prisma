import { PrismaModuleAuth } from '../../auth/src/prisma/prisma.module.auth';
import { ConfigModule } from '@nestjs/config';
import { AppResolver } from './app.resolver';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ContextModule } from 'libs/_common/context/context.module';
import { ContextAuthService } from 'libs/_common/context/context-auth.service';
import { GqlConfigService } from 'libs/_common/graphql/graphql.provider';

@Module({
  imports: [
    ContextModule,
    ConfigModule,
    ClientsModule.register([
      {
        name: 'AUTH_SERVICE',
        transport: Transport.TCP,
        options: {
          port: 3001
        },
      },
      {
        name: 'PRODUCT_SERVICE',
        transport: Transport.TCP,
        options: {
          port: 3002
        }
      },
      {
        name: 'PAYMENT_SERVICE',
        transport: Transport.TCP,
        options: {
          port: 3003
        }
      },
      {
        name: 'CART_SERVICE',
        transport: Transport.TCP,
        options: {
          port: 3004
        }
      },
    ]),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useClass: GqlConfigService,
      imports: [ContextModule]
    }),
    // GraphQLModule.forRoot<ApolloDriverConfig>({
    //   driver: ApolloDriver,
    //   autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    //   sortSchema: true,
    // }),
  ],
  providers: [AppService, AppResolver],
})
export class AppModule { }
