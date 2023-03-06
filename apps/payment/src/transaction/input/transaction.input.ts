import { InputType, Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsUUID } from 'class-validator';
import { PaymentMethodEnum, PaymentStatusEnum } from '../../payment/payment.enum';
import { CardDetails } from '../../payment/payment.type';

@InputType()
export class TransactionCreateInput {

    @Field(() => String, { nullable: true })
    id?: string;

    // @Field(() => Number, { nullable: false })
    // amount: number;

    @IsUUID()
    @Field(() => String, { nullable: true })
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
export class CreateOneTransactionArgs {
    @Field(() => TransactionCreateInput, { nullable: false })
    @Type(() => TransactionCreateInput)
    data!: TransactionCreateInput;
}

@InputType()
export class UpdatePaymentTransaction {
    @IsOptional()
    failureReason?: string;
  
    @IsNotEmpty()
    paymentStatus: PaymentStatusEnum;
  
    cardDetails?: CardDetails | any;
  }