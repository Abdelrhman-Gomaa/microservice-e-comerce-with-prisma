import { OrderCreateInput } from './order/input/order.input';
import { User } from 'apps/auth/src/user/model/user.model';
import { Controller, Get, Post } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Cart } from 'apps/cart/src/cart/model/cart.model';
import { PREPARE_PAYMENT, CHECK_PAYMENT_STATUS } from './patterns/payment.pattern';
import { CREATE_STRIPE } from './patterns/stripe-test.pattern';
import { CREATE_TRANSACTION } from './patterns/transaction.pattern';
import { PaymentService } from './payment.service';
import { PreparePaymentInput, GetPaymentStatusInput } from './payment/input/payment.input';
import { IPaymentGateway } from './payment/payment.interface';
import { TransactionCreateInput } from './transaction/input/transaction.input';
import { CREATE_ORDER } from './patterns/order.pattern';
import { PaymentMethodEnum } from './payment/payment.enum';


@Controller()
export class PaymentController {

    private paymentGatewayProvider: IPaymentGateway;
    constructor(
        private paymentService: PaymentService,
    ) {
        // this.paymentGatewayProvider = this.stripeService as IPaymentGateway;
    }

    @MessagePattern({ cmd: PREPARE_PAYMENT })
    async preparePayment(@Payload() input: PreparePaymentInput, @Payload() user: any) {
        return await this.paymentGatewayProvider.preparePayment(input, user);
    }

    @MessagePattern({ cmd: CHECK_PAYMENT_STATUS })
    async checkPaymentStatusThenProcess(@Payload() input: GetPaymentStatusInput) {
        return await this.paymentGatewayProvider.checkPaymentStatusThenProcess(input);
    }

    @MessagePattern({ cmd: CREATE_TRANSACTION })
    async Payment(input: {
        cartData: Cart,
        input: TransactionCreateInput
    }) {
        return await this.paymentService.createPaymentTransaction(input.cartData, input.input);
    }

    @MessagePattern({ cmd: CREATE_STRIPE })
    async paymentWithStripe(input: {
        cartData: Cart,
        clientData: User;
    }) {
        return await this.paymentService.createPayment(input.cartData, input.clientData);
    }

    @MessagePattern({ cmd: CREATE_ORDER })
    async createOrder(input: {
        payMethod: PaymentMethodEnum;
        cartData: Cart,
    }) {
        return await this.paymentService.createOrder(input.payMethod, input.cartData);
    }

}