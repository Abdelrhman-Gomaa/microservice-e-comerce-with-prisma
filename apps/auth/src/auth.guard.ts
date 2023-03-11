import { GqlContext } from './../../../libs/_common/graphql/graphql-context.type';
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
  ) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const { currentUser } = ctx.getContext() as GqlContext;
    if (!currentUser) { throw new UnauthorizedException('not found authenticated user'); }
    return true;
  }
}
