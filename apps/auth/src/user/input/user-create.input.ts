import { Type } from 'class-transformer';
import { Field, ArgsType } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Gender, maritalStatus, Role, Device } from '@prisma/client';
import { GraphQLJSON } from 'graphql-type-json';
import { IsEnum } from 'class-validator';
import { DeviceEnum, GenderEnum, maritalStatusEnum, RoleEnum } from '../user.enum';

@InputType()
export class UserCreateInput {

    @Field(() => String, { nullable: true })
    id?: string;

    @Field(() => String, { nullable: false })
    firstName: string;

    @Field(() => String, { nullable: false })
    lastName: string;

    @Field(() => String, { nullable: true })
    fullName?: string;

    @Field(() => String, { nullable: true })
    slug?: string;

    @Field(() => String, { nullable: true })
    email!: string | null;

    @Field(() => String, { nullable: false })
    notVerifiedPhone: string;

    @Field(() => String, { nullable: true })
    verifiedPhone?: string;

    @Field(() => String, { nullable: false })
    password: string;

    @Field(() => GenderEnum, { nullable: true })
    gender?: Gender;

    @Field(() => maritalStatusEnum, { nullable: true })
    maritalStatus?: keyof typeof maritalStatus;

    @Field(() => RoleEnum, { nullable: true })
    role?: keyof typeof Role;

    @Field(() => Date, { nullable: true })
    birthDate?: Date | string;

    @Field(() => String, { nullable: true })
    country?: string;

    @Field(() => String, { nullable: true })
    address?: string;

    @Field(() => String, { nullable: true })
    location?: string;

    @Field(() => String, { nullable: true })
    profilePicture?: string;

    @Field(() => Boolean, { nullable: true })
    isBlocked?: boolean;

    @Field(() => Boolean, { nullable: true })
    isDeleted?: boolean;

    @Field(() => String, { nullable: true })
    favLang?: string;

    @Field(() => String, { nullable: true })
    securityGroup?: string;

    @Field(() => String, { nullable: true })
    securityGroupId?: string;

    @Field(() => GraphQLJSON, { nullable: true })
    fcmTokens?: any;

    @Field(() => DeviceEnum, { nullable: true })
    device?: keyof typeof Device;

    @Field(() => String, { nullable: true })
    userVerificationCodes?: string;

    @Field(() => String, { nullable: true })
    spokenLanguages?: string;

    @Field(() => String, { nullable: true })
    token?: string;

    @Field(() => Date, { nullable: true })
    createdAt?: Date | string;

    @Field(() => Date, { nullable: true })
    updatedAt?: Date | string;
}

@ArgsType()
export class CreateOneUserArgs {
    @Field(() => UserCreateInput, { nullable: false })
    @Type(() => UserCreateInput)
    data!: UserCreateInput;
}

