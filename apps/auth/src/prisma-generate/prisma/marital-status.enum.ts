import { registerEnumType } from '@nestjs/graphql';

export enum maritalStatus {
    SINGLE = "SINGLE",
    MARRIED = "MARRIED",
    WIDOWED = "WIDOWED",
    DIVORCED = "DIVORCED"
}


registerEnumType(maritalStatus, { name: 'maritalStatus', description: undefined })
