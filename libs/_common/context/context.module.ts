import { PrismaModuleAuth } from 'apps/auth/src/prisma/prisma.module.auth';
import { ConfigModule } from '@nestjs/config';
import { Global, Module } from '@nestjs/common';
import { ContextAuthService } from './context-auth.service';

@Global()
@Module({
  imports: [ConfigModule],
  providers: [ContextAuthService],
  exports: [ContextAuthService]
})
export class ContextModule { }
