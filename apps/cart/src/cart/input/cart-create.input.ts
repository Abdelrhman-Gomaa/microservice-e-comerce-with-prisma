import { Type } from 'class-transformer';
import { Field, ArgsType, Int } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class cartCreateItemsIdsInput {
    @Field(() => [String], { nullable: false })
    set!: Array<string>;
}

@InputType()
export class CartCreateInput {

    @Field(() => String, { nullable: true })
    id?: string;

    @Field(() => Int, { nullable: true })
    totalPrice?: number;

    @Field(() => cartCreateItemsIdsInput, { nullable: false })
    itemsIds: cartCreateItemsIdsInput;

    @Field(() => String, { nullable: true })
    clientId?: string;

    @Field(() => Date, { nullable: true, defaultValue: new Date() })
    createdAt?: Date | string;

    @Field(() => Date, { nullable: true, defaultValue: new Date() })
    updatedAt?: Date | string;

}

@ArgsType()
export class CreateOneCartArgs {
    @Field(() => CartCreateInput, { nullable: false })
    @Type(() => CartCreateInput)
    data!: CartCreateInput;
}