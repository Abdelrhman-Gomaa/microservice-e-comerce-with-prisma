import { registerEnumType } from '@nestjs/graphql';

export enum PaymentMethodEnum {
    USER_WALLET = 'USER_WALLET',
    STRIPE_CREDIT_CARD = 'STRIPE_CREDIT_CARD'
}
registerEnumType(PaymentMethodEnum, { name: 'PaymentMethodEnum' });

export enum PaymentStatusEnum {
    SUCCEEDED = 'SUCCEEDED',
    FAILED = 'FAILED',
    PENDED = 'PENDED',
    REFUNDED = 'REFUNDED'
}
registerEnumType(PaymentStatusEnum, { name: 'PaymentStatusEnum' });

export enum RegistrationStatusEnum {
    SUCCEEDED = 'SUCCEEDED',
    FAILED = 'FAILED',
    PENDED = 'PENDED'
}
registerEnumType(RegistrationStatusEnum, { name: 'RegistrationStatusEnum' });

export enum GatewayPaymentMethodEnum {
    CREDIT_CARD = 'CREDIT_CARD',
    APPLE_PAY = 'APPLE_PAY',
    MADA = 'MADA'
}
registerEnumType(GatewayPaymentMethodEnum, { name: 'GatewayPaymentMethodEnum' });