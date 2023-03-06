import { Field, ID, ObjectType } from '@nestjs/graphql';
import { NotificationTypeEnum } from '../../notification.enum';

@ObjectType()
export class Notification {

    @Field(() => ID)
    id: string;

    @Field(() => [ID])
    receivers?: string[];

    @Field(() => ID)
    senderId?: string;

    @Field(() => NotificationTypeEnum)
    type: NotificationTypeEnum;

    @Field()
    thumbnail?: string;

    @Field()
    title: string;

    @Field()
    body: string;

    createdAt: Date;

    updatedAt: Date;

}
