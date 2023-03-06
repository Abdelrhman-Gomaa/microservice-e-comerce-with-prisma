import { GqlContext } from './../../../libs/_common/graphql/graphql-context.type';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { UnauthorizedException } from '@nestjs/common/exceptions';
import { GqlExecutionContext } from '@nestjs/graphql';
import { RoleEnum } from './user/user.enum';

@Injectable()
export class ValidUserGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const { currentUser } = ctx.getContext() as GqlContext;
    
    if (!currentUser) throw new UnauthorizedException();
    if (currentUser.isBlocked) throw new UnauthorizedException('BLOCKED_USER')
    if (!currentUser.verifiedPhone)
      throw new UnauthorizedException('USER_PHONE_NOT_VERIFIED_YET')

    return true;
  }
}
