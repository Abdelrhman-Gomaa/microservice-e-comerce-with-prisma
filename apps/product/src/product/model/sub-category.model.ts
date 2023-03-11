import { Category } from './category.model';
import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SubCategory {

    @Field(() => String, { nullable: false })
    id: string;

    @Field(() => String, { nullable: false })
    title: string;

    // @Field(() => Category, {nullable:true})
    category?: Category;

    @Field(() => String, {nullable:true})
    categoryId?: string;

    @Field(() => Date, { nullable: true })
    createdAt?: Date | string;

    @Field(() => Date, { nullable: true })
    updatedAt?: Date | string;
}
