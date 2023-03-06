import { NotificationTypeEnum } from './notification.enum';
import { Field, ObjectType } from '@nestjs/graphql';
import { Timestamp } from 'libs/_common/graphql/timestamp.scalar';


export const NotificationTypeReturnedToUser = [];

export type AllowedUserFields = {
  id: string;
  firstName: string;
  lastName?: string;
  slug: string;
  profilePicture: string;
};

export type FcmTokensAndTokensLocalized = {
  AR: { ids: { receiverId: string; seen: false }[]; tokens: string[] };
  EN: { ids: { receiverId: string; seen: false }[]; tokens: string[] };
};

export type NotificationPayload = {
  title?: string;
  body: string;
  notificationType: NotificationTypeEnum;
  thumbnail?: string;
  clickAction?: string;
  entityId?: string;
  details?: object;
};

export type SaveNotificationForPusher = {
  refinedFromUser?: AllowedUserFields;
  notificationParentId?: string;
  payloadData: NotificationPayload;
  messagingResponse?: any;
  toUsersIds: string[];
};

@ObjectType()
export class NotificationManager {
  @Field()
  VIA_PUSH: boolean;
}

@ObjectType()
export class NotificationReceiver {
  @Field()
  receiverId: string;

  @Field(() => Timestamp, { nullable: true })
  seenAt: Timestamp | number;
}

@ObjectType()
export class NotExistRecord {
  @Field()
  notExistRecord: boolean;
}
