import { Field, Int, ObjectType } from '@nestjs/graphql';
import { UserStoredPaymentMethod } from './model/payment.model';
import { PaymentStatusEnum, RegistrationStatusEnum } from './payment.enum';

@ObjectType()
export class CardDetails {
  @Field()
  last4Digits: string;

  @Field()
  brand: string;
}

@ObjectType()
export class StoredCardInfo {
  @Field()
  last4Digits: string;

  @Field(() => Int)
  expiryMonth: number;

  @Field(() => Int)
  expiryYear: number;

  @Field()
  holderName: string;

  @Field()
  brand: string;
}

@ObjectType()
export class StoredBankInfo {
  @Field()
  iban: string;

  @Field()
  holderName: string;
}

@ObjectType()
export class PreparePaymentRes {
  @Field()
  checkoutId: string;

  @Field({ nullable: true })
  clientSecret?: string;

  @Field({ nullable: true })
  user?: any;
}

@ObjectType()
export class GetPaymentStatus {
  @Field(() => PaymentStatusEnum)
  status: PaymentStatusEnum;

  @Field()
  message: string;

  @Field(() => UserStoredPaymentMethod, { nullable: true })
  storedPaymentMethod?: UserStoredPaymentMethod;

}

@ObjectType()
export class GetTopUpStatus {
  @Field(() => PaymentStatusEnum)
  status: PaymentStatusEnum;

  @Field()
  message: string;

  @Field(() => UserStoredPaymentMethod, { nullable: true })
  storedPaymentMethod?: UserStoredPaymentMethod;
}

@ObjectType()
export class GetStorePaymentMethodStatus {
  @Field(() => RegistrationStatusEnum)
  status: RegistrationStatusEnum | any;

  @Field()
  message: string;

  @Field(() => UserStoredPaymentMethod)
  storedPaymentMethod: UserStoredPaymentMethod;
}

@ObjectType()
export class PrepareTopUpRes {
  @Field()
  checkoutId: string;

  @Field({ nullable: true })
  clientSecret?: string;
}
