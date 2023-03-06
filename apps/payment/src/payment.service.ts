import { PrismaServicePayment } from './prisma/prisma.service.payment';
import { Injectable } from '@nestjs/common';
import { TransactionCreateInput, UpdatePaymentTransaction } from './transaction/input/transaction.input';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';
import { Transaction } from './transaction/model/transaction.model';
import { User } from 'apps/auth/src/user/model/user.model';
import { Cart } from 'apps/cart/src/cart/model/cart.model';
@Injectable()
export class PaymentService {

  private stripe = new Stripe(
    process.env.STRIPE_TEST_SECRET_KEY, {
    apiVersion: this.configService.get('STRIPE_API_VERSION')
  });

  constructor(
    private readonly prisma: PrismaServicePayment,
    private readonly configService: ConfigService
  ) { }

  public async createPaymentTransaction(cart: Cart, input: TransactionCreateInput) {
    if (cart.clientId === input.userId) {
      return await this.prisma.transaction.create({
        data: {
          ...input,
          amount: cart.totalPrice,
          cartId: cart.id
        }
      });
    } else throw new Error('Cannot Payment For This Cart');
  }

  async createPayment(cart: Cart, user: User) {
    const stripeCustomer = await this.stripe.customers.create({
      email: user.email,
      name: user.fullName,
      phone: user.notVerifiedPhone
    });
    let paymentMethodOnStripe: Stripe.PaymentMethod;

    const payment = await this.stripe.paymentIntents.create({
      amount: cart.totalPrice * 100,
      currency: process.env.CURRENCY,
      metadata: { userId: user.id },
      customer: stripeCustomer.id,
    });
    return payment;
  }

  async createOrder(payMethod: any, cart: Cart) {
    const order = await this.prisma.order.create({
      data: {
        paymentMethod: payMethod,
        itemsIds: cart.itemsIds,
        userId: cart.clientId,
        totalPrice: cart.totalPrice
      }
    });
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>', order);
    return order;
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////

  public async updatePaymentTransactionStatus(
    trx: Transaction,
    input: UpdatePaymentTransaction,
  ) {
    await this.prisma.transaction.update({
      where: {
        id: trx.id,
      },
      data: {
        paymentMethod: trx.paymentMethod,
        ...(input.failureReason && { failureReason: input.failureReason }),
        paymentStatus: input.paymentStatus,
      }
    });
  }

  public async transactionByCheckoutId(cartId: string, userId: string) {
    const trx = await this.prisma.transaction.findFirst({
      where: {
        userId: userId,
        cartId: cartId
      }
    });
    if (!trx) throw new Error('Error Cannot find transaction');
    return trx;
  }

}
