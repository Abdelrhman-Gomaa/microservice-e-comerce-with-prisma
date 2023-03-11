import { CartCreateInput } from './cart/input/cart-create.input';
import { Injectable } from '@nestjs/common';
import { PrismaServiceCart } from './prisma/prisma.service.cart';

@Injectable()
export class CartService {

  constructor(
    private readonly prisma: PrismaServiceCart,
  ) { }


  async createCart(input: CartCreateInput) {
    return this.prisma.cart.create({
      data: {
        clientId: input.clientId,
        itemsIds: input.itemsIds,
        totalPrice: input.totalPrice,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt
      }
    });
  }

  async cartsBoard() {
    return await this.prisma.cart.findMany({});
  }

  async findOneCart(id: string) {
    return this.prisma.cart.findFirst({ where: { id } });
  }

  async deleteCart(id: string) {
    return this.prisma.cart.delete({ where: { id } });
  }

  async deleteCartForUser(userId: string) {
    return this.prisma.cart.deleteMany({ where: { clientId: userId } });
  }

  async updateCartClient(cartId: string, clientId: string) {
    const cart = await this.prisma.cart.updateMany({
      where: { id: cartId },
      data: { clientId: clientId }
    });
    return cart;
  }

}
