import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TransactionCount {
    @Field(() => Int, {nullable:false})
    trx?: number;
}