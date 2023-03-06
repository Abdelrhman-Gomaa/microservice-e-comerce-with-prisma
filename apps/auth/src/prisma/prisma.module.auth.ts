import { Module } from '@nestjs/common';
import { PrismaServiceAuth } from './prisma.service.auth';

@Module({
    providers: [PrismaServiceAuth],
    exports: [PrismaServiceAuth]
})
export class PrismaModuleAuth { }
