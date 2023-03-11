import { REGISTER, EMAIL_AND_PASSWORD_LOGIN, USER_BOARD, FIND_ONE_USER, UPDATE_CART_FOR_USER } from './patterns/auth.pattern';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserCreateInput } from './user/input/user-create.input';
import { EmailAndPasswordLoginInput } from './user/input/email-password-login.input';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @MessagePattern({ cmd: EMAIL_AND_PASSWORD_LOGIN })
  async emailAndPasswordLogin(@Payload() input: EmailAndPasswordLoginInput) {
    return this.authService.emailAndPasswordLoginBoard(input);
  }

  @MessagePattern({ cmd: UPDATE_CART_FOR_USER })
  async updateCartIdForUser(@Payload() input: EmailAndPasswordLoginInput) {
    return this.authService.updateCartIdForUser(input);
  }

  @MessagePattern({ cmd: REGISTER })
  async register(@Payload() input: UserCreateInput) {
    console.log(input);
    return this.authService.register(input);
  }

  // @UseGuards(AuthGuard)
  @MessagePattern({ cmd: USER_BOARD })
  async userBoard() {
    return await this.authService.usersBoard();
  }

  @MessagePattern({ cmd: FIND_ONE_USER })
  async findOneUser() {
    return await this.authService.findOneUser();
  }

}
