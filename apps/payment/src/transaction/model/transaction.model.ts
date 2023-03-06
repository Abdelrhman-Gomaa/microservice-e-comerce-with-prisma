import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PaymentMethodEnum, PaymentStatusEnum } from '../../payment/payment.enum';
import { CardDetails } from '../../payment/payment.type';

@ObjectType()
export class Transaction {

    @Field(() => String, { nullable: false })
    id: string;

    @Field(() => Number, { nullable: false })
    amount: number;

    @Field(() => String, { nullable: false })
    userId: string;

    @Field(() => PaymentMethodEnum, { nullable: false })
    paymentMethod: PaymentMethodEnum | string | any;

    @Field(() => PaymentStatusEnum, { nullable: false })
    paymentStatus: PaymentStatusEnum | string | any;

    @Field(() => String, { nullable: true })
    failureReason?: string;

    @Field(() => String, { nullable: false })
    cartId: string;

    @Field(() => Date, { nullable: true })
    createdAt?: Date | string;

    @Field(() => Date, { nullable: true })
    updatedAt?: Date | string;
}


@ObjectType()
export class StripePayment {
    @Field(() => Number, { nullable: true })
    amount?: number;

    @Field(() => String, { nullable: true })
    currency?: string;

    @Field(() => String, { nullable: true })
    customer?: string;
}

