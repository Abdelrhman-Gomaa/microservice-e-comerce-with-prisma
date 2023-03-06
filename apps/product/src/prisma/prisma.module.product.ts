import { Module } from '@nestjs/common';
import { PrismaServiceProduct } from './prisma.service.product';

@Module({
    providers: [PrismaServiceProduct],
    exports: [PrismaServiceProduct]
})
export class PrismaModuleProduct { }
