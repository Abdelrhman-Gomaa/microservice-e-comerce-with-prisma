import { IContextAuthServiceToken, IContextAuthService } from './../../../libs/_common/context/context-auth.interface';
import { GqlContext } from './../../../libs/_common/graphql/graphql-context.type';
import { CanActivate, ExecutionContext, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Reflector } from '@nestjs/core';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
  ) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const { currentUser } = ctx.getContext() as GqlContext;
    if (!currentUser) throw new UnauthorizedException('not found authenticated user');
    return true;
  }
}
