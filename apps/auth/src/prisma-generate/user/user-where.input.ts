import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumGenderFilter } from '../prisma/enum-gender-filter.input';
import { EnummaritalStatusFilter } from '../prisma/enummarital-status-filter.input';
import { EnumRoleFilter } from '../prisma/enum-role-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { EnumDeviceNullableFilter } from '../prisma/enum-device-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    firstName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    lastName?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    fullName?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    slug?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    email?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    notVerifiedPhone?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    verifiedPhone?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => EnumGenderFilter, {nullable:true})
    gender?: EnumGenderFilter;

    @Field(() => EnummaritalStatusFilter, {nullable:true})
    maritalStatus?: EnummaritalStatusFilter;

    @Field(() => EnumRoleFilter, {nullable:true})
    role?: EnumRoleFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    birthDate?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    country?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    address?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    location?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    profilePicture?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    isBlocked?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    isDeleted?: BoolFilter;

    @Field(() => StringFilter, {nullable:true})
    favLang?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    securityGroup?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    securityGroupId?: StringNullableFilter;

    @Field(() => EnumDeviceNullableFilter, {nullable:true})
    device?: EnumDeviceNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userVerificationCodes?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    spokenLanguages?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    token?: StringNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    fcmTokens?: JsonNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    cartId?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;
}
