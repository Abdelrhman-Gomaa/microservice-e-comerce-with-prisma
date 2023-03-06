import { MessagePattern } from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { CartService } from './cart.service';
import { FIND_OND_CART, CREATE_CART, CARTS_BOARD } from './patterns/cart.pattern';
import { CartCreateInput } from './cart/input/cart-create.input';

@Controller()
export class CartController {
    constructor(
        private readonly cartService: CartService
    ) { }

    @MessagePattern({ cmd: FIND_OND_CART })
    async findOneCart(id: string) {
        return await this.cartService.findOneCart(id);
    }

    @MessagePattern({ cmd: CREATE_CART })
    async createCart(input: CartCreateInput) {
        return await this.cartService.createCart(input);
    }

    @MessagePattern({ cmd: CARTS_BOARD })
    async cartsBoard() {
        return await this.cartService.cartsBoard();
    }
}