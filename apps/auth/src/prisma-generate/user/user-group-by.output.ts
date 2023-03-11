import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Gender } from '../prisma/gender.enum';
import { maritalStatus } from '../prisma/marital-status.enum';
import { Role } from '../prisma/role.enum';
import { Device } from '../prisma/device.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { UserCountAggregate } from './user-count-aggregate.output';
import { UserMinAggregate } from './user-min-aggregate.output';
import { UserMaxAggregate } from './user-max-aggregate.output';

@ObjectType()
export class UserGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => String, {nullable:true})
    fullName?: string;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    notVerifiedPhone?: string;

    @Field(() => String, {nullable:true})
    verifiedPhone?: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => Gender, {nullable:false})
    gender!: keyof typeof Gender;

    @Field(() => maritalStatus, {nullable:false})
    maritalStatus!: keyof typeof maritalStatus;

    @Field(() => Role, {nullable:false})
    role!: keyof typeof Role;

    @Field(() => Date, {nullable:true})
    birthDate?: Date | string;

    @Field(() => String, {nullable:true})
    country?: string;

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => String, {nullable:true})
    location?: string;

    @Field(() => String, {nullable:true})
    profilePicture?: string;

    @Field(() => Boolean, {nullable:false})
    isBlocked!: boolean;

    @Field(() => Boolean, {nullable:false})
    isDeleted!: boolean;

    @Field(() => String, {nullable:false})
    favLang!: string;

    @Field(() => String, {nullable:true})
    securityGroup?: string;

    @Field(() => String, {nullable:true})
    securityGroupId?: string;

    @Field(() => Device, {nullable:true})
    device?: keyof typeof Device;

    @Field(() => String, {nullable:true})
    userVerificationCodes?: string;

    @Field(() => String, {nullable:true})
    spokenLanguages?: string;

    @Field(() => String, {nullable:true})
    token?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    fcmTokens?: any;

    @Field(() => String, {nullable:true})
    cartId?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCountAggregate, {nullable:true})
    _count?: UserCountAggregate;

    @Field(() => UserMinAggregate, {nullable:true})
    _min?: UserMinAggregate;

    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: UserMaxAggregate;
}
