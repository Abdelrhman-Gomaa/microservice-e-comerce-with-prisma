import { Field, Int } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Cart {

    @Field(() => String, { nullable: false })
    id: string;

    @Field(() => Int, { nullable: false })
    totalPrice: number;

    @Field(() => [String], { nullable: false })
    itemsIds: Array<string>;

    @Field(() => String, { nullable: true })
    clientId?: string;
   
    @Field(() => Date, { nullable: true })
    createdAt?: Date | string;

    @Field(() => Date, { nullable: true })
    updatedAt?: Date | string;
}
