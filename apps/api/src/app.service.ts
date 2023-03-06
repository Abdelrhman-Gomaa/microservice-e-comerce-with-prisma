import { CREATE_ORDER } from './../../payment/src/patterns/order.pattern';
import { User } from 'apps/auth/src/user/model/user.model';
import { TransactionCreateInput } from './../../payment/src/transaction/input/transaction.input';
import { CARTS_BOARD } from './../../cart/src/patterns/cart.pattern';
import {
  CREATE_CATEGORY,
  CATEGORY_BOARD,
  CREATE_PRODUCT,
  PRODUCT_BOARD,
  CREATE_SUB_CATEGORY,
  SUB_CATEGORY_BOARD
} from './../../product/src/patterns/product.pattern';
import { EMAIL_AND_PASSWORD_LOGIN, FIND_ONE_USER } from './../../auth/src/patterns/auth.pattern';
import { UserCreateInput } from './../../auth/src/user/input/user-create.input';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy, CONTEXT } from '@nestjs/microservices';
import { REGISTER, USER_BOARD } from './patterns/auth.pattern';
import { EmailAndPasswordLoginForBoardInput } from 'apps/auth/src/user/input/user.interface';
import { CategoryCreateInput, SubCategoryCreateInput } from 'apps/product/src/product/input/category.create.input';
import { ProductCreateInput } from 'apps/product/src/product/input/product-create.input';
import { CREATE_CART, FIND_OND_CART } from './patterns/cart.pattern';
import { PaymentInput } from './inputs/payment.inpur';
import { CREATE_STRIPE, CREATE_TRANSACTION } from './patterns/payment.pattern';
import { CartCreateInput } from 'apps/cart/src/cart/input/cart-create.input';
import { GqlContext } from 'libs/_common/graphql/graphql-context.type';
import { CreateOneOrderArgs, OrderCreateInput } from 'apps/payment/src/order/input/order.input';

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

  async emailAndPasswordLogin(input: EmailAndPasswordLoginForBoardInput) {
    try {
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
      input.clientId = currentUser.id;
      return await this.cartService.send({ cmd: CREATE_CART }, input);
    } catch (err) {
      console.log(err);
    }
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
  async payment(
    input: TransactionCreateInput
  ) {
    let { currentUser } = this.context;
    let payMethod = input.paymentMethod;
    try {
      input.userId = currentUser.id;
      await this.userService
        .send({ cmd: FIND_ONE_USER }, currentUser)
        .subscribe(async clientData => {
          await this.cartService
            .send({ cmd: FIND_OND_CART }, input.cartId)
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
        });
      return true;
    } catch (err) {
      console.log(err);
    }
  }

}
