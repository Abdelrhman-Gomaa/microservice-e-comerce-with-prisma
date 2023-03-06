import { PrismaClient } from '@prisma-cart/prisma/client';
import { INestApplication, Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';


@Injectable()
export class PrismaServiceCart extends PrismaClient implements OnModuleInit, OnModuleDestroy {

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