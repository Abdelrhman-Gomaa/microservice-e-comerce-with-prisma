import { TransactionCreateInput } from './../../payment/src/transaction/input/transaction.input';
import { UserCreateInput } from './../../auth/src/user/input/user-create.input';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy, CONTEXT } from '@nestjs/microservices';
import { CategoryCreateInput, SubCategoryCreateInput } from 'apps/product/src/product/input/category.create.input';
import { ProductCreateInput } from 'apps/product/src/product/input/product-create.input';
import { CartCreateInput } from 'apps/cart/src/cart/input/cart-create.input';
import { GqlContext } from 'libs/_common/graphql/graphql-context.type';
import { firstValueFrom } from 'rxjs';
import { EmailAndPasswordLoginInput } from 'apps/auth/src/user/input/email-password-login.input';
import {
  CREATE_STRIPE,
  CREATE_TRANSACTION,
  CREATE_ORDER
} from './patterns/payment.pattern';
import {
  CREATE_CART,
  DELETE_CART_FOR_USER,
  FIND_ONE_CART,
  CARTS_BOARD,
  DELETE_CART,
  UPDATE_CART_CLIENT
} from './patterns/cart.pattern';
import {
  PRODUCT_FOR_CART,
  CATEGORY_BOARD,
  CREATE_CATEGORY,
  CREATE_PRODUCT,
  PRODUCT_BOARD,
  SUB_CATEGORY_BOARD,
  CREATE_SUB_CATEGORY
} from './patterns/product.pattern';
import {
  REGISTER,
  USER_BOARD,
  UPDATE_CART_FOR_USER,
  EMAIL_AND_PASSWORD_LOGIN,
  FIND_ONE_USER
} from './patterns/auth.pattern';

@Injectable()
export class AppService {
  constructor(
    @Inject('AUTH_SERVICE') private userService: ClientProxy,
    @Inject('PRODUCT_SERVICE') private productService: ClientProxy,
    @Inject('PAYMENT_SERVICE') private paymentService: ClientProxy,
    @Inject('CART_SERVICE') private cartService: ClientProxy,
    @Inject(CONTEXT) private readonly context: GqlContext,
  ) { }

  // ----------------------------------------------- Authentication -----------------------------------------------
  async register(input: UserCreateInput) {
    try {
      return this.userService.send({ cmd: REGISTER }, input);
    } catch (err) {
      console.log(err);
    }
  }

  async emailAndPasswordLogin(input: EmailAndPasswordLoginInput) {

    try {
      const login = await this.getUser(input);
      
      const userId = login.id;
      const cartId = input.cartId
      if (input.cartId) {
        const isCartExist = await this.getCart(cartId);
        if(!isCartExist) throw new Error('Cannot Find Cart');
        if(isCartExist && !isCartExist.clientId){
          this.cartService.send({ cmd: DELETE_CART_FOR_USER }, userId).subscribe(data => { console.log('DELETE_CART_FOR_USER', data); });
          this.userService.send({ cmd: UPDATE_CART_FOR_USER }, input).subscribe(data => { console.log('UPDATE_CART_FOR_USER', data); });
          this.cartService.send({ cmd: UPDATE_CART_CLIENT }, { cartId , userId}).subscribe(data => { console.log('UPDATE_CART_CLIENT', data); });
        }
      }
      return this.userService.send({ cmd: EMAIL_AND_PASSWORD_LOGIN }, input);
    } catch (err) {
      console.log(err);
    }
  }

  async usersBoard() {
    try {
      return this.userService.send({ cmd: USER_BOARD }, {});
    } catch (err) {
      console.log(err);
    }
  }

  private async getCart(cartId: string) {
    return await firstValueFrom(
      this.cartService.send({ cmd: FIND_ONE_CART }, cartId)
    );
  }

  private async getUser(input: EmailAndPasswordLoginInput) {
    
    return await firstValueFrom(
      this.userService.send({ cmd: EMAIL_AND_PASSWORD_LOGIN }, input)
    );
  }

  async findUser() {
    return this.userService.send({ cmd: FIND_ONE_USER }, {});
  }

  // ----------------------------------------------- Product -----------------------------------------------
  async createCategory(input: CategoryCreateInput) {
    try {
      return this.productService.send({ cmd: CREATE_CATEGORY }, input);
    } catch (err) {
      console.log(err);
    }
  }

  async categoryBoard() {
    try {
      return this.productService.send({ cmd: CATEGORY_BOARD }, {});
    } catch (err) {
      console.log(err);
    }
  }

  async createProduct(input: ProductCreateInput) {
    try {
      return this.productService.send({ cmd: CREATE_PRODUCT }, input);
    } catch (err) {
      console.log(err);
    }
  }

  async productBoard() {
    try {
      return this.productService.send({ cmd: PRODUCT_BOARD }, {});
    } catch (err) {
      console.log(err);
    }
  }

  async createSubCategory(input: SubCategoryCreateInput) {
    try {
      return this.productService.send({ cmd: CREATE_SUB_CATEGORY }, input);
    } catch (err) {
      console.log(err);
    }
  }

  async subCategoryBoard() {
    try {
      return this.productService.send({ cmd: SUB_CATEGORY_BOARD }, {});
    } catch (err) {
      console.log(err);
    }
  }

  // ----------------------------------------------- Cart -----------------------------------------------

  async createCart(input: CartCreateInput) {
    let { currentUser } = this.context;
    try {
      let total = 0;
      if (currentUser) input.clientId = currentUser.id;
      const priceArray = await this.getItemsPrice(input.itemsIds.set);
      priceArray.forEach((price) => total += price);
      input.totalPrice = total;
      return this.cartService.send({ cmd: CREATE_CART }, input);
    } catch (err) {
      console.log(err);
    }
  }

  private async getItemsPrice(itemsMap: string[]) {
    const items = await firstValueFrom(
      this.productService.send({ cmd: PRODUCT_FOR_CART }, itemsMap)
    );
    let price = items.map(item => item.price);
    return price;
  }

  async CartsBoard() {
    try {
      const carts = this.cartService.send({ cmd: CARTS_BOARD }, {});
      return await carts;
    } catch (err) {
      console.log(err);
    }
  }

  // ----------------------------------------------- Payment -----------------------------------------------
  payment(
    input: TransactionCreateInput
  ) {
    let { currentUser } = this.context;
    let payMethod = input.paymentMethod;
    try {
      input.userId = currentUser.id;
      this.userService
        .send({ cmd: FIND_ONE_USER }, currentUser)
        .subscribe(clientData => {

          this.cartService
            .send({ cmd: FIND_ONE_CART }, input.cartId)
            .subscribe(cartData => {

              this.paymentService
                .send({ cmd: CREATE_TRANSACTION }, { cartData, input })
                .subscribe(data => { data; });

              this.paymentService
                .send({ cmd: CREATE_STRIPE }, { cartData, clientData })
                .subscribe(data => { data; });

              this.paymentService
                .send({ cmd: CREATE_ORDER }, { payMethod, cartData })
                .subscribe(data => { data; });

            });

          this.cartService
            .send({ cmd: DELETE_CART }, input.cartId);

        });
      return true;
    } catch (err) {
      console.log(err);
    }
  }

}
