import { InputType, Field, ArgsType } from '@nestjs/graphql';
import { PaymentMethodEnum, PaymentStatusEnum } from 'apps/payment/src/payment/payment.enum';
import { Type } from 'class-transformer';
import { IsOptional, IsUUID } from 'class-validator';

@InputType()
export class PaymentInput {

    @Field(() => String, { nullable: true })
    id?: string;

    @Field(() => Number, { nullable: false })
    amount: number;

    @IsUUID()
    @Field(() => String, { nullable: false })
    userId: string;

    @Field(() => PaymentMethodEnum, { nullable: false })
    paymentMethod: PaymentMethodEnum;

    @Field(() => PaymentStatusEnum, { nullable: false })
    paymentStatus: PaymentStatusEnum;

    @IsOptional()
    @Field(() => String, { nullable: true })
    failureReason?: string;
    
    @Field(() => String, { nullable: false })
    cartId: string;

    @IsOptional()
    @Field(() => Date, { nullable: true })
    createdAt?: Date | string;
    
    @IsOptional()
    @Field(() => Date, { nullable: true })
    updatedAt?: Date | string;
}

@ArgsType()
export class PaymentArgs {
    @Field(() => PaymentInput, { nullable: false })
    @Type(() => PaymentInput)
    data!: PaymentInput;
}