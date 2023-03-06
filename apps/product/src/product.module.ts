import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductResolver } from './product.resolver';
import { ApolloFederationDriverConfig, ApolloFederationDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaModuleProduct } from './prisma/prisma.module.product';
import { ProductController } from './product.controller';

@Module({
  imports: [PrismaModuleProduct],
  controllers: [ProductController],
  providers: [ProductService, ProductResolver],
  exports: [ProductService, ProductResolver],
})
export class ProductModule { }
