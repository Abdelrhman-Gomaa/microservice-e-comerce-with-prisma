import { Module } from '@nestjs/common';
import { PrismaServicePayment } from './prisma.service.payment';

@Module({
    providers: [PrismaServicePayment],
    exports: [PrismaServicePayment]
})
export class PrismaModulePayment { }
