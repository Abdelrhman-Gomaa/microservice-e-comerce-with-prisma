import { Module } from '@nestjs/common';
import { PrismaServiceNotification } from './prisma.service.notification';

@Module({
    providers: [PrismaServiceNotification],
    exports: [PrismaServiceNotification]
})
export class PrismaModuleNotification { }
