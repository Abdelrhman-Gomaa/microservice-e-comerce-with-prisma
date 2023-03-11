import { MessagePattern } from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { CartService } from './cart.service';
import { CREATE_CART, CARTS_BOARD, FIND_ONE_CART, DELETE_CART, DELETE_CART_FOR_USER, UPDATE_CART_CLIENT } from './patterns/cart.pattern';
import { CartCreateInput } from './cart/input/cart-create.input';

@Controller()
export class CartController {
    constructor(
        private readonly cartService: CartService
    ) { }

    @MessagePattern({ cmd: FIND_ONE_CART })
    async findOneCart(id: string) {
        return await this.cartService.findOneCart(id);
    }

    @MessagePattern({ cmd: DELETE_CART })
    async deleteCart(id: string) {
        return await this.cartService.deleteCart(id);
    }

    @MessagePattern({ cmd: DELETE_CART_FOR_USER })
    async deleteCartForUser(userId: string) {
        return await this.cartService.deleteCartForUser(userId);
    }

    @MessagePattern({ cmd: CREATE_CART })
    async createCart(input: CartCreateInput) {
        return await this.cartService.createCart(input);
    }

    @MessagePattern({ cmd: CARTS_BOARD })
    async cartsBoard() {
        return await this.cartService.cartsBoard();
    }

    @MessagePattern({ cmd: UPDATE_CART_CLIENT })
    async updateCartClient(input:{cartId: string, userId: string}) {
        return await this.cartService.updateCartClient(input.cartId, input.userId);
    }
}