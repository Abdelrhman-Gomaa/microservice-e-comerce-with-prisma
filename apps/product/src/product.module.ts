import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { PrismaModuleProduct } from './prisma/prisma.module.product';
import { ProductController } from './product.controller';

@Module({
  imports: [PrismaModuleProduct],
  controllers: [ProductController],
  providers: [ProductService],
  exports: [ProductService],
})
export class ProductModule { }
