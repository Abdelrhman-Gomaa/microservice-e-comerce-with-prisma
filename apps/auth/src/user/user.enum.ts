import { registerEnumType } from '@nestjs/graphql';

export enum GenderEnum {
    MALE = "MALE",
    FEMALE = "FEMALE"
}
registerEnumType(GenderEnum, { name: 'GenderEnum', description: undefined });


export enum maritalStatusEnum {
    SINGLE = "SINGLE",
    MARRIED = "MARRIED",
    WIDOWED = "WIDOWED",
    DIVORCED = "DIVORCED"
}
registerEnumType(maritalStatusEnum, { name: 'maritalStatusEnum', description: undefined });

export enum RoleEnum {
    USER = "USER",
    ADMIN = "ADMIN"
}
registerEnumType(RoleEnum, { name: 'RoleEnum', description: undefined });


export enum DeviceEnum {
    DESKTOP = "DESKTOP",
    IOS = "IOS",
    ANDROID = "ANDROID"
}
registerEnumType(DeviceEnum, { name: 'DeviceEnum', description: undefined });

export enum LangEnum {
    EN = 'EN',
    AR = 'AR'
}
registerEnumType(LangEnum, { name: 'LangEnum' });