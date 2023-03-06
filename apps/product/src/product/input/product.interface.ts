import { Field, InputType } from '@nestjs/graphql';
import { Device } from '@prisma/client';
import { IsEmail, IsNotEmpty, IsEnum, MinLength, MaxLength, IsString, IsOptional } from 'class-validator';

// @InputType()
// export class EmailAndPasswordLoginForBoardInput {
//   @IsEmail()
//   @IsNotEmpty()
//   @Field()
//   email: string;

//   @Field()
//   @MinLength(6)
//   @MaxLength(30)
//   @IsNotEmpty()
//   password: string;

//   @Field({ nullable: true })
//   @IsString()
//   @IsOptional()
//   fcmToken?: string;

//   @Field(type => Device)
//   @IsEnum(Device)
//   @IsNotEmpty()
//   device: Device;
// }
