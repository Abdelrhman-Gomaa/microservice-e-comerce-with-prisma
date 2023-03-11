import { DeviceEnum } from './../user.enum';
import { InputType, Field, ArgsType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, MinLength, MaxLength, IsString, IsOptional, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';

@InputType()
export class EmailAndPasswordLoginInput {
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

  @Field(() => String, { nullable: true })
  cartId?: string;

  @Field(type => DeviceEnum)
  @IsEnum(DeviceEnum)
  @IsNotEmpty()
  device: DeviceEnum;
}

@ArgsType()
export class EmailAndPasswordLoginArgs {
    @Field(() => EmailAndPasswordLoginInput, { nullable: false })
    @Type(() => EmailAndPasswordLoginInput)
    data!: EmailAndPasswordLoginInput;
}
