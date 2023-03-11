import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Gender } from '../prisma/gender.enum';
import { maritalStatus } from '../prisma/marital-status.enum';
import { Role } from '../prisma/role.enum';
import { Device } from '../prisma/device.enum';
import { GraphQLJSON } from 'graphql-type-json';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => String, {nullable:true})
    fullName!: string | null;

    @Field(() => String, {nullable:true})
    slug!: string | null;

    @Field(() => String, {nullable:true})
    email!: string | null;

    @Field(() => String, {nullable:true})
    notVerifiedPhone!: string | null;

    @Field(() => String, {nullable:true})
    verifiedPhone!: string | null;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => Gender, {nullable:false,defaultValue:'MALE'})
    gender!: keyof typeof Gender;

    @Field(() => maritalStatus, {nullable:false,defaultValue:'SINGLE'})
    maritalStatus!: keyof typeof maritalStatus;

    @Field(() => Role, {nullable:false,defaultValue:'USER'})
    role!: keyof typeof Role;

    @Field(() => Date, {nullable:true})
    birthDate!: Date | null;

    @Field(() => String, {nullable:true})
    country!: string | null;

    @Field(() => String, {nullable:true})
    address!: string | null;

    @Field(() => String, {nullable:true})
    location!: string | null;

    @Field(() => String, {nullable:true})
    profilePicture!: string | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isBlocked!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isDeleted!: boolean;

    @Field(() => String, {nullable:false,defaultValue:'EN'})
    favLang!: string;

    @Field(() => String, {nullable:true})
    securityGroup!: string | null;

    @Field(() => String, {nullable:true})
    securityGroupId!: string | null;

    @Field(() => Device, {nullable:true})
    device!: keyof typeof Device | null;

    @Field(() => String, {nullable:true})
    userVerificationCodes!: string | null;

    @Field(() => String, {nullable:true})
    spokenLanguages!: string | null;

    @Field(() => String, {nullable:true})
    token!: string | null;

    @Field(() => GraphQLJSON, {nullable:true})
    fcmTokens!: any | null;

    @Field(() => String, {nullable:true})
    cartId!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;
}
