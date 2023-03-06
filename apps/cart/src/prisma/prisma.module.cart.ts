import { Module } from '@nestjs/common';
import { PrismaServiceCart } from './prisma.service.cart';

@Module({
    providers: [PrismaServiceCart],
    exports: [PrismaServiceCart]
})
export class PrismaModuleCart { }
