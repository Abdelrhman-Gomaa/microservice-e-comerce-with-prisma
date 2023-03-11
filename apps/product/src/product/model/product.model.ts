import { Category } from './category.model';
import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';
import { Construction } from '../product.type';

@ObjectType()
export class Product {

    @Field(() => String, { nullable: false })
    id: string;

    @Field(() => String, { nullable: false })
    title: string;

    @Field(() => Number, { nullable: false })
    price: number;

    @Field(() => String, { nullable: true })
    color?: string;

    @Field(() => Number, { nullable: false })
    quantity: number;

    @Field(() => String, { nullable: true })
    description?: string;

    @Field(() => String, { nullable: true })
    instructions?: string;

    @Field(() => Construction, { nullable: true })
    construction?: Construction;

    // @Field(() => Category, { nullable: true })
    category?: Category;

    @IsUUID()
    @Field(() => String, { nullable: true })
    categoryId?: string;
    
    @Field(() => Date, { nullable: true })
    createdAt?: Date | string;

    @Field(() => Date, { nullable: true })
    updatedAt?: Date | string;
}
