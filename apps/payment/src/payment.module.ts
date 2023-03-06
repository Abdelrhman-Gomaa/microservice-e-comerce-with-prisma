import { PaymentController } from './payment.controller';
import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { ApolloFederationDriverConfig, ApolloFederationDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaModulePayment } from './prisma/prisma.module.payment';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    PrismaModulePayment,
    ConfigModule
  ],
  controllers: [PaymentController],
  providers: [PaymentService],
  exports: [PaymentService]
})
export class PaymentModule { }
