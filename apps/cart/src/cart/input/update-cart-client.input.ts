import { InputType, Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

@InputType()
export class CartClientUpdateInput {

    @Field(() => String, { nullable: true })
    id?: string;

    @Field(() => String, { nullable: true })
    clientId?: string;

}

@ArgsType()
export class CartClientUpdateArgs {
    @Field(() => CartClientUpdateInput, { nullable: false })
    @Type(() => CartClientUpdateInput)
    data!: CartClientUpdateInput;
}