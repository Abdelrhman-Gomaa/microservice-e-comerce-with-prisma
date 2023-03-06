import { REGISTER, EMAIL_AND_PASSWORD_LOGIN, USER_BOARD, FIND_ONE_USER } from './patterns/auth.pattern';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserCreateInput } from './user/input/user-create.input';
import { EmailAndPasswordLoginForBoardInput } from './user/input/user.interface';
import { AuthGuard } from './auth.guard';
import { UseGuards } from '@nestjs/common/decorators';
import { CurrentUser } from './auth-user.decorator';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @MessagePattern({ cmd: EMAIL_AND_PASSWORD_LOGIN })
  async emailAndPasswordLogin(@Payload() input: EmailAndPasswordLoginForBoardInput) {
    return this.authService.emailAndPasswordLoginBoard(input);
  }

  @MessagePattern({ cmd: REGISTER })
  async register(@Payload() input: UserCreateInput) {
    console.log(input);
    return this.authService.register(input);
  }

  @MessagePattern({ cmd: USER_BOARD })
  async userBoard() {
    return await this.authService.usersBoard();
  }

  @MessagePattern({ cmd: FIND_ONE_USER })
  async findOneUser(currentUser:any) {
    return await this.authService.findOneUser(currentUser);
  }

}
