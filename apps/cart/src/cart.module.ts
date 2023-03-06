import { CartController } from './cart.controller';
import { PrismaModuleCart } from './prisma/prisma.module.cart';
import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloFederationDriverConfig, ApolloFederationDriver } from '@nestjs/apollo';

@Module({
  imports: [PrismaModuleCart],
  controllers: [CartController],
  providers: [CartService],
  exports: [CartService]
})
export class CartModule { }
