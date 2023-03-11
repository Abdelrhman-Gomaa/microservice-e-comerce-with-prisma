import { registerEnumType } from '@nestjs/graphql';

export enum Device {
    DESKTOP = "DESKTOP",
    IOS = "IOS",
    ANDROID = "ANDROID"
}


registerEnumType(Device, { name: 'Device', description: undefined })
