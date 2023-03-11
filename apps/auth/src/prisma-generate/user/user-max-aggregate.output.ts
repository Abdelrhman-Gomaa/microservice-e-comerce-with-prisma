import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Gender } from '../prisma/gender.enum';
import { maritalStatus } from '../prisma/marital-status.enum';
import { Role } from '../prisma/role.enum';
import { Device } from '../prisma/device.enum';

@ObjectType()
export class UserMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    firstName?: string;

    @Field(() => String, {nullable:true})
    lastName?: string;

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

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => Gender, {nullable:true})
    gender?: keyof typeof Gender;

    @Field(() => maritalStatus, {nullable:true})
    maritalStatus?: keyof typeof maritalStatus;

    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;

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

    @Field(() => Boolean, {nullable:true})
    isBlocked?: boolean;

    @Field(() => Boolean, {nullable:true})
    isDeleted?: boolean;

    @Field(() => String, {nullable:true})
    favLang?: string;

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

    @Field(() => String, {nullable:true})
    cartId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
