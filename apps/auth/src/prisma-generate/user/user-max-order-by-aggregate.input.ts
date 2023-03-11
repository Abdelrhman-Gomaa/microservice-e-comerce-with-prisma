import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class UserMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fullName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    notVerifiedPhone?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    verifiedPhone?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    gender?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    maritalStatus?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    birthDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    country?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    address?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    location?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    profilePicture?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isBlocked?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isDeleted?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    favLang?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    securityGroup?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    securityGroupId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    device?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userVerificationCodes?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    spokenLanguages?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    token?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cartId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
