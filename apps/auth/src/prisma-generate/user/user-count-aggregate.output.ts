import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    firstName!: number;

    @Field(() => Int, {nullable:false})
    lastName!: number;

    @Field(() => Int, {nullable:false})
    fullName!: number;

    @Field(() => Int, {nullable:false})
    slug!: number;

    @Field(() => Int, {nullable:false})
    email!: number;

    @Field(() => Int, {nullable:false})
    notVerifiedPhone!: number;

    @Field(() => Int, {nullable:false})
    verifiedPhone!: number;

    @Field(() => Int, {nullable:false})
    password!: number;

    @Field(() => Int, {nullable:false})
    gender!: number;

    @Field(() => Int, {nullable:false})
    maritalStatus!: number;

    @Field(() => Int, {nullable:false})
    role!: number;

    @Field(() => Int, {nullable:false})
    birthDate!: number;

    @Field(() => Int, {nullable:false})
    country!: number;

    @Field(() => Int, {nullable:false})
    address!: number;

    @Field(() => Int, {nullable:false})
    location!: number;

    @Field(() => Int, {nullable:false})
    profilePicture!: number;

    @Field(() => Int, {nullable:false})
    isBlocked!: number;

    @Field(() => Int, {nullable:false})
    isDeleted!: number;

    @Field(() => Int, {nullable:false})
    favLang!: number;

    @Field(() => Int, {nullable:false})
    securityGroup!: number;

    @Field(() => Int, {nullable:false})
    securityGroupId!: number;

    @Field(() => Int, {nullable:false})
    device!: number;

    @Field(() => Int, {nullable:false})
    userVerificationCodes!: number;

    @Field(() => Int, {nullable:false})
    spokenLanguages!: number;

    @Field(() => Int, {nullable:false})
    token!: number;

    @Field(() => Int, {nullable:false})
    fcmTokens!: number;

    @Field(() => Int, {nullable:false})
    cartId!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
