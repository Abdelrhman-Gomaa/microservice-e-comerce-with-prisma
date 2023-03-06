import { Type } from 'class-transformer';
import { Field, ArgsType } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IsUUID, IsOptional } from 'class-validator';
import { CardDetails } from '../payment.type';
import { GatewayPaymentMethodEnum, PaymentMethodEnum, PaymentStatusEnum } from '../payment.enum';

@InputType()
export class StripeWebhookCreateInput {

    @IsOptional()
    @Field(() => String, { nullable: true })
    id?: string;

    @IsOptional()
    @Field(() => String, { nullable: true })
    webhookIdOnStripe?: string;

    @IsOptional()
    @Field(() => String, { nullable: true })
    secret?: string;

    @IsOptional()
    @Field(() => String, { nullable: true })
    url?: string;

    @IsOptional()
    @Field(() => Date, { nullable: true })
    createdAt?: Date | string;

    @IsOptional()
    @Field(() => Date, { nullable: true })
    updatedAt?: Date | string;
}

@ArgsType()
export class CreateOneStripeWebhookArgs {
    @Field(() => StripeWebhookCreateInput, { nullable: false })
    @Type(() => StripeWebhookCreateInput)
    data!: StripeWebhookCreateInput;
}


@InputType()
export class StripeCustomerCreateInput {

    @IsOptional()
    @Field(() => String, { nullable: true })
    id?: string;

    @IsOptional()
    @Field(() => String, { nullable: true })
    stripeCustomerId?: string;

    @IsOptional()
    @Field(() => String, { nullable: true })
    userId?: string;

    @IsOptional()
    @Field(() => Date, { nullable: true })
    createdAt?: Date | string;

    @IsOptional()
    @Field(() => Date, { nullable: true })
    updatedAt?: Date | string;
}

@ArgsType()
export class CreateOneStripeCustomerArgs {
    @Field(() => StripeCustomerCreateInput, { nullable: false })
    @Type(() => StripeCustomerCreateInput)
    data!: StripeCustomerCreateInput;
}

@InputType()
export class PreparePaymentInput {

  @Field({ nullable: true })
  userId?: string;

  @IsUUID('4', { message: 'You have to select a cart to buy' })
  @Field({ nullable: true })
  cartId?: string;

  @Field(() => GatewayPaymentMethodEnum)
  paymentMethod: GatewayPaymentMethodEnum;

  @IsOptional()
  @Field({ nullable: true })
  storedPaymentMethodId?: string;

  @Field(() => Number)
  amount: number;

  @IsOptional()
  @Field({ nullable: true })
  canStorePaymentMethod?: boolean;

}

@InputType()
export class GetPaymentStatusInput {
  @Field()
  checkoutId: string;

  @Field()
  userId: string;
}

// @InputType()
// export class GetTopUpStatusInput {
//   @Field()
//   checkoutId: string;
// }

// @InputType()
// export class PrepareTopUpInput {
//   @Field()
//   amountInUsd: number;

//   @Field(() => GatewayPaymentMethodEnum)
//   paymentMethod: GatewayPaymentMethodEnum;

//   @IsOptional()
//   @IsUUID('4')
//   @Field({ nullable: true })
//   storedPaymentMethodId?: string;

//   @Field({ nullable: true })
//   canStorePaymentMethod?: boolean;
// }

@InputType()
export class GetStoredPaymentMethodStatusInput {
  @Field()
  checkoutId: string;
}

@InputType()
export class PrepareStoringPaymentMethodInput {
  @Field(() => GatewayPaymentMethodEnum)
  paymentMethod: GatewayPaymentMethodEnum;
}

@InputType()
export class DeletePaymentMethodDataInput {
  @IsUUID('4')
  @Field()
  storedPaymentMethodId: string;
}

