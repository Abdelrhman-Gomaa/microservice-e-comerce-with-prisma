import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    firstName = "firstName",
    lastName = "lastName",
    fullName = "fullName",
    slug = "slug",
    email = "email",
    notVerifiedPhone = "notVerifiedPhone",
    verifiedPhone = "verifiedPhone",
    password = "password",
    gender = "gender",
    maritalStatus = "maritalStatus",
    role = "role",
    birthDate = "birthDate",
    country = "country",
    address = "address",
    location = "location",
    profilePicture = "profilePicture",
    isBlocked = "isBlocked",
    isDeleted = "isDeleted",
    favLang = "favLang",
    securityGroup = "securityGroup",
    securityGroupId = "securityGroupId",
    device = "device",
    userVerificationCodes = "userVerificationCodes",
    spokenLanguages = "spokenLanguages",
    token = "token",
    fcmTokens = "fcmTokens",
    cartId = "cartId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
