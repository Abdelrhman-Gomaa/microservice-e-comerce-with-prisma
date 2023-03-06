import { ApolloFederationDriverConfig, ApolloFederationDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { NotificationService } from './notification.service';
import { PrismaModuleNotification } from './prisma/prisma.module.notification';

@Module({
  imports: [PrismaModuleNotification],
  providers: [NotificationService],
  exports: [NotificationService],
})
export class NotificationModule { }