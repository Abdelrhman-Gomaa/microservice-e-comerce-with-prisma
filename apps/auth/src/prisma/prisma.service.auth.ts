import { PrismaClient } from '@prisma-auth/prisma/client';
import { INestApplication, Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';

@Injectable()
export class PrismaServiceAuth extends PrismaClient implements OnModuleInit, OnModuleDestroy {

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