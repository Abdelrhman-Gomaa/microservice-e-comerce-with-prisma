import { Field, InputType } from '@nestjs/graphql';
import { Device } from '@prisma/client';
import { IsEmail, IsNotEmpty, IsEnum, MinLength, MaxLength, IsString, IsOptional } from 'class-validator';
import { DeviceEnum } from '../user.enum';

export interface FcmTokenTransformerInput {
    fcmToken?: string;
    device?: keyof typeof Device;
    userSavedFcmTokens?: FcmTokensType;
}

export class FcmTokensType {
    android?: string;
    ios?: string;
    desktop?: string;
}
