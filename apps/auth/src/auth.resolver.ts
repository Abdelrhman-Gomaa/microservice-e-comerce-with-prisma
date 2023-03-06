import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './user/model/user.model';
import { EmailAndPasswordLoginForBoardInput } from './user/input/user.interface';
import { CreateOneUserArgs } from './user/input/user-create.input';
import { MessagePattern, RmqContext } from '@nestjs/microservices';
import { Ctx, Payload } from '@nestjs/microservices/decorators';
import { AuthService } from './auth.service';

@Resolver(User)
export class AuthResolver {
    constructor(
        private readonly authService: AuthService
    ) { }

    // @Mutation(() => User)
    // async register(@Args() input: CreateOneUserArgs) {
    //     return await this.userService.register(input.data);
    // }

    // @Mutation(() => User)
    // async emailAndPasswordLoginBoard(@Args('input') input: EmailAndPasswordLoginForBoardInput) {
    //     return await this.userService.emailAndPasswordLoginBoard(input);
    // }

    @Query(() => String)
    async usersBoard() {
        return 'Hello';
    }

    @MessagePattern('EmailAndPasswordLogin')
    async emailAndPasswordLogin(@Ctx() context: RmqContext, @Payload() input: EmailAndPasswordLoginForBoardInput) {
        //   this.sharedService.acknowledgeMessage(context);
        // console.log(`Subject: ${context.getSubject()}`); 
        return this.authService.emailAndPasswordLoginBoard(input);
    }


    @MessagePattern('register')
    async register(@Ctx() context: RmqContext, @Payload() input: CreateOneUserArgs) {
        console.log('>>>>>>>>>>', input);
        //   this.sharedService.acknowledgeMessage(context);
        console.log(`from auth resolver`);
        return this.authService.register(input.data);
    }

    @MessagePattern('userBoard')
    async userBoard(@Ctx() context: RmqContext, @Payload() input: CreateOneUserArgs) {
        //   this.sharedService.acknowledgeMessage(context);
        // console.log(`Subject: ${context.getSubject()}`); 
        return await this.authService.usersBoard();
    }


}