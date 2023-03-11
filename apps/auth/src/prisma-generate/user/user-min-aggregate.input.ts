import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    firstName?: true;

    @Field(() => Boolean, {nullable:true})
    lastName?: true;

    @Field(() => Boolean, {nullable:true})
    fullName?: true;

    @Field(() => Boolean, {nullable:true})
    slug?: true;

    @Field(() => Boolean, {nullable:true})
    email?: true;

    @Field(() => Boolean, {nullable:true})
    notVerifiedPhone?: true;

    @Field(() => Boolean, {nullable:true})
    verifiedPhone?: true;

    @Field(() => Boolean, {nullable:true})
    password?: true;

    @Field(() => Boolean, {nullable:true})
    gender?: true;

    @Field(() => Boolean, {nullable:true})
    maritalStatus?: true;

    @Field(() => Boolean, {nullable:true})
    role?: true;

    @Field(() => Boolean, {nullable:true})
    birthDate?: true;

    @Field(() => Boolean, {nullable:true})
    country?: true;

    @Field(() => Boolean, {nullable:true})
    address?: true;

    @Field(() => Boolean, {nullable:true})
    location?: true;

    @Field(() => Boolean, {nullable:true})
    profilePicture?: true;

    @Field(() => Boolean, {nullable:true})
    isBlocked?: true;

    @Field(() => Boolean, {nullable:true})
    isDeleted?: true;

    @Field(() => Boolean, {nullable:true})
    favLang?: true;

    @Field(() => Boolean, {nullable:true})
    securityGroup?: true;

    @Field(() => Boolean, {nullable:true})
    securityGroupId?: true;

    @Field(() => Boolean, {nullable:true})
    device?: true;

    @Field(() => Boolean, {nullable:true})
    userVerificationCodes?: true;

    @Field(() => Boolean, {nullable:true})
    spokenLanguages?: true;

    @Field(() => Boolean, {nullable:true})
    token?: true;

    @Field(() => Boolean, {nullable:true})
    cartId?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}
