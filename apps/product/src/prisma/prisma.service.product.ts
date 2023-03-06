import { PrismaClient } from '@prisma-product/prisma/client';
import { INestApplication, Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';


@Injectable()
export class PrismaServiceProduct extends PrismaClient implements OnModuleInit, OnModuleDestroy {

  constructor() {
    super();
  }
  async onModuleInit() {
    await this.$connect();
  }
  
    async onModuleDestroy() {
      await this.$disconnect();
  }
}