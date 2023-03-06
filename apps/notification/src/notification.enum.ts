import { registerEnumType } from '@nestjs/graphql';

export enum PushNotificationEnum {
  SUCCEED = 'SUCCEED',
  NO_USERS = 'NO_USERS',
  NO_FCM_TOKENS = 'NO_FCM_TOKENS'
}

export enum NotificationTypeEnum {
  PUBLIC = 'PUBLIC',
  NEW_CONTACT_MESSAGE = 'NEW_CONTACT_MESSAGE',
  AGORA_ACCESS_TOKEN_GENERATED = 'AGORA_ACCESS_TOKEN_GENERATED',
  AGORA_MEDIA_REQUEST_REPLIED = 'AGORA_MEDIA_REQUEST_REPLIED',
  AGORA_MEDIA_STATUS_CHANGED = 'AGORA_MEDIA_STATUS_CHANGED'
}
registerEnumType(NotificationTypeEnum, { name: 'NotificationTypeEnum' });

export enum NotificationManagerEnum {
  VIA_PUSH = 'VIA_PUSH',
  WHEN_NEW_CONTACT_MESSAGE = 'WHEN_NEW_CONTACT_MESSAGE'
}
registerEnumType(NotificationManagerEnum, { name: 'NotificationManagerEnum' });

export enum SendNotificationBoardTypeEnum {
  ALL_USERS = 'ALL_USERS',
  SPECIFIC_USERS = 'SPECIFIC_USERS'
}
registerEnumType(SendNotificationBoardTypeEnum, { name: 'SendNotificationBoardTypeEnum' });
