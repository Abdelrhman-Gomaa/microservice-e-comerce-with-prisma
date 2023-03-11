import { AuthController } from './auth.controller';
import { Module } from '@nestjs/common';
import { PrismaModuleAuth } from 'apps/auth/src/prisma/prisma.module.auth';
import { AuthService } from './auth.service';

@Module({
  imports: [PrismaModuleAuth],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService]
})
export class AuthModule { }
