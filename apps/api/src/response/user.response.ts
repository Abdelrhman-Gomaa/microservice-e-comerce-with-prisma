import { generateGqlResponseType } from 'libs/_common/graphql/graphql-response.type';
import { User } from '../../../auth/src/prisma-generate/user/user.model';


export const GqlUserResponse = generateGqlResponseType(User);
export const GqlUsersResponse = generateGqlResponseType(Array(User),true);
