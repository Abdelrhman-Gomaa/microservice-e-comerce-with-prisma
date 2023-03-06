import { AuthController } from './auth.controller';
import { ApolloFederationDriverConfig, ApolloFederationDriver, ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaModuleAuth } from 'apps/auth/src/prisma/prisma.module.auth';
import { join } from 'path';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';

@Module({
  imports: [PrismaModuleAuth],
  controllers: [AuthController],
  providers: [AuthService, AuthResolver],
  exports: [AuthService, AuthResolver]
})
export class AuthModule { }
