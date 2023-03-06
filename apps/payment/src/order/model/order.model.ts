import { Field, Int } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PaymentMethodEnum } from '../../payment/payment.enum';

@ObjectType()
export class Order {

    @Field(() => String, { nullable: false })
    id: string;

    @Field(() => String, { nullable: false })
    userId: string;

    @Field(() => [String], { nullable: false })
    itemsIds: Array<string>;

    @Field(() => Int, { nullable: false })
    totalPrice: number;

    @Field(() => PaymentMethodEnum, { nullable: false })
    paymentMethod: PaymentMethodEnum | string | any;

    @Field(() => Date, { nullable: true })
    createdAt?: Date | string;

    @Field(() => Date, { nullable: true })
    updatedAt?: Date | string;
}