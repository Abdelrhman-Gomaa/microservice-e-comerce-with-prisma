import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Gender, maritalStatus, Role, Device } from '@prisma/client';
import { GraphQLJSON } from 'graphql-type-json';
import { UserCount } from '../input/user.count.output';
import { DeviceEnum, GenderEnum, maritalStatusEnum, RoleEnum } from '../user.enum';

@ObjectType()
export class User {

    @Field(() => ID, { nullable: false })
    id!: string;

    @Field(() => String, { nullable: false })
    firstName!: string;

    @Field(() => String, { nullable: false })
    lastName!: string;

    @Field(() => String, { nullable: true })
    fullName!: string | null;

    @Field(() => String, { nullable: true })
    slug!: string | null;

    @Field(() => String, { nullable: true })
    email!: string ;

    @Field(() => String, { nullable: true })
    notVerifiedPhone!: string | null;

    @Field(() => String, { nullable: true })
    verifiedPhone!: string | null;

    @Field(() => String, { nullable: false })
    password!: string;

    @Field(() => GenderEnum, { nullable: false, defaultValue: 'MALE' })
    gender!: keyof typeof Gender;

    @Field(() => maritalStatusEnum, { nullable: false, defaultValue: 'SINGLE' })
    maritalStatus!: keyof typeof maritalStatus;

    @Field(() => RoleEnum, { nullable: false, defaultValue: 'USER' })
    role!: keyof typeof Role;

    @Field(() => Date, { nullable: true })
    birthDate!: Date | null;

    @Field(() => String, { nullable: true })
    country!: string | null;

    @Field(() => String, { nullable: true })
    address!: string | null;

    @Field(() => String, { nullable: true })
    location!: string | null;

    @Field(() => String, { nullable: true })
    profilePicture!: string | null;

    @Field(() => Boolean, { nullable: false, defaultValue: false })
    isBlocked!: boolean;

    @Field(() => Boolean, { nullable: false, defaultValue: false })
    isDeleted!: boolean;

    @Field(() => String, { nullable: false, defaultValue: 'EN' })
    favLang!: string;

    @Field(() => String, { nullable: true })
    securityGroup!: string | null;

    @Field(() => String, { nullable: true })
    securityGroupId!: string | null;

    @Field(() => GraphQLJSON, { nullable: true })
    fcmTokens?: any | null;

    @Field(() => DeviceEnum, { nullable: true })
    device!: keyof typeof Device | null;

    @Field(() => String, { nullable: true })
    userVerificationCodes!: string | null;

    @Field(() => String, { nullable: true })
    spokenLanguages!: string | null;

    @Field(() => String, { nullable: true })
    token!: string | null;

    @Field(() => Date, { nullable: false })
    createdAt!: Date;

    @Field(() => Date, { nullable: true })
    updatedAt!: Date | null;

    @Field(() => UserCount, { nullable: false })
    _count?: UserCount;
}
