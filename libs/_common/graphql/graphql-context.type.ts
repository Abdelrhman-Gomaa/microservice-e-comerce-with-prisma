import { LangEnum } from './../../../apps/auth/src/user/user.enum';
import { User } from 'apps/auth/src/user/model/user.model';
import { Timezone } from './graphql-response.type';

export interface GqlContext {
  currentUser?: User;
  req: Request;
  lang: LangEnum;
  country: string;
  timezone: Timezone;
  // loaders: IDataLoaders;
}
