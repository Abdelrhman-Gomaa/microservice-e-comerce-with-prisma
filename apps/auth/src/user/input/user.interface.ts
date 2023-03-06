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

@InputType()
export class EmailAndPasswordLoginForBoardInput {
  @IsEmail()
  @IsNotEmpty()
  @Field()
  email: string;

  @Field()
  @MinLength(6)
  @MaxLength(30)
  @IsNotEmpty()
  password: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  fcmToken?: string;

  @Field(type => DeviceEnum)
  @IsEnum(DeviceEnum)
  @IsNotEmpty()
  device: Device;
}
