import { User } from 'apps/auth/src/user/model/user.model';
import { Timezone } from '../graphql/graphql-response.type';
import { Request } from 'express';
import { LangEnum } from 'apps/auth/src/user/user.enum';

export const IContextAuthServiceToken = 'IContextAuthService';

export interface IContextAuthService {
  getTimezone(timezoneAsString: string): Timezone;

  getUserFromReqHeaders(req: Request): Promise<User>;

  getLocale(req: Request): { lang: LangEnum; country: string };
}
