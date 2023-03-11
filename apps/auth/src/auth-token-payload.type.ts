import { User } from './prisma-generate/user/user.model';

export interface TokenPayload {
  user: User;
}
