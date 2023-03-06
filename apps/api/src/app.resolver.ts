import { Cart } from './../../cart/src/cart/model/cart.model';
import { SubCategory } from './../../product/src/product/model/sub-category.model';
import { Product } from './../../product/src/product/model/product.model';
import { CreateOneProductArgs } from './../../product/src/product/input/product-create.input';
import { CreateOneCategoryArgs, CreateOneSubCategoryArgs } from './../../product/src/product/input/category.create.input';
import { Category } from './../../product/src/product/model/category.model';
import { CreateOneUserArgs } from './../../auth/src/user/input/user-create.input';
import { Resolver, Mutation, Args, Query, Context } from '@nestjs/graphql';
import { User } from 'apps/auth/src/user/model/user.model';
import { AppService } from './app.service';
import { EmailAndPasswordLoginForBoardInput } from 'apps/auth/src/user/input/user.interface';
import { CreateOneCartArgs } from 'apps/cart/src/cart/input/cart-create.input';
import { Transaction } from 'apps/payment/src/transaction/model/transaction.model';
import { CreateOneTransactionArgs } from 'apps/payment/src/transaction/input/transaction.input';
import { CurrentUser } from 'apps/auth/src/auth-user.decorator';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'apps/auth/src/auth.guard';
import { CreateOneOrderArgs } from 'apps/payment/src/order/input/order.input';

@Resolver()
export class AppResolver {
    constructor(
        private readonly appService: AppService
    ) { }

    // ----------------------------------------------- Authentication -----------------------------------------------
    @Mutation(() => User)
    async register(@Args() input: CreateOneUserArgs) {
        return await this.appService.register(input.data);
    }

    @Mutation(() => User)
    async emailAndPasswordLogin(@Args('input') input: EmailAndPasswordLoginForBoardInput) {
        return await this.appService.emailAndPasswordLogin(input);
    }

    @UseGuards(AuthGuard)
    @Query(() => [User])
    async usersBoard() {
        return await this.appService.usersBoard();
    }

    // ----------------------------------------------- Product -----------------------------------------------
    @Mutation(() => Category)
    async createCategory(@Args() input: CreateOneCategoryArgs) {
        return await this.appService.createCategory(input.data);
    }

    @UseGuards(AuthGuard)
    @Query(() => [Category])
    async categoryBoard() {
        return await this.appService.categoryBoard();
    }

    @Mutation(() => Product)
    async createProduct(@Args() input: CreateOneProductArgs) {
        return await this.appService.createProduct(input.data);
    }

    @UseGuards(AuthGuard)
    @Query(() => [Product])
    async productBoard() {
        return await this.appService.productBoard();
    }

    @Mutation(() => SubCategory)
    async createSubCategory(@Args() input: CreateOneSubCategoryArgs) {
        return await this.appService.createSubCategory(input.data);
    }

    @UseGuards(AuthGuard)
    @Query(() => [SubCategory])
    async subCategoryBoard() {
        return await this.appService.subCategoryBoard();
    }

    // ----------------------------------------------- Cart -----------------------------------------------

    @Mutation(() => Cart)
    async createCart(@Args() input: CreateOneCartArgs) {
        return await this.appService.createCart(input.data);
    }

    @UseGuards(AuthGuard)
    @Query(() => [Cart])
    async cartsBoard() {
        return await this.appService.CartsBoard();
    }

    // ----------------------------------------------- Payment -----------------------------------------------

    @UseGuards(AuthGuard)
    @Mutation(() => Boolean)
    async payment(
        @Args() input: CreateOneTransactionArgs,
    ) {
        return await this.appService.payment(input.data);
    }

}