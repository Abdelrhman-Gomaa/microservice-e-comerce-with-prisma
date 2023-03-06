import { IContextAuthService } from 'libs/_common/context/context-auth.interface';
import { PrismaModuleAuth } from 'apps/auth/src/prisma/prisma.module.auth';
import { ConfigModule } from '@nestjs/config';
import { Global, Module } from '@nestjs/common';
import { IContextAuthServiceToken } from './context-auth.interface';
import { ContextAuthService } from './context-auth.service';

@Global()
@Module({
  imports: [ConfigModule, PrismaModuleAuth],
  providers: [ContextAuthService],
  exports: [ContextAuthService]
})
export class ContextModule { }
