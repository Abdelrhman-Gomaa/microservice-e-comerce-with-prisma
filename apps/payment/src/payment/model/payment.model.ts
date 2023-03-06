import { Field, ID, ObjectType } from '@nestjs/graphql';
import { GatewayPaymentMethodEnum, RegistrationStatusEnum } from '../payment.enum';
import { StoredBankInfo, StoredCardInfo } from '../payment.type';

@ObjectType()
export class UserStoredPaymentMethod {

    @Field(() => ID)
    id: string;

    @Field(() => ID)
    userId: string;

    @Field({ nullable: true })
    registrationId?: string;

    gatewayOrderId: string;

    registrationStatus: RegistrationStatusEnum;

    @Field(() => StoredCardInfo, { nullable: true })
    cardInfo?: StoredCardInfo;

    @Field(() => GatewayPaymentMethodEnum, { nullable: true })
    paymentMethod: GatewayPaymentMethodEnum;

    @Field(() => StoredBankInfo, { nullable: true })
    bankInfo?: StoredBankInfo;

    createdAt: Date;

    updatedAt: Date;
}
