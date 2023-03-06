import { PrismaClient } from '@prisma-payment/prisma/client';
import { INestApplication, Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';


@Injectable()
export class PrismaServicePayment extends PrismaClient implements OnModuleInit, OnModuleDestroy {

  constructor() {
    super();
  }

  async onModuleInit() {
    await this.$connect();
  }
  
  // async enableShutdownHooks(app: INestApplication) {
  //   this.$on('beforeExit', async () => {
  //     await app.close();
  //   });
  // }
  
    async onModuleDestroy() {
      await this.$disconnect();
  }
}