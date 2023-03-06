import { Type } from 'class-transformer';
import { Field, ArgsType } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Construction } from '../product.type';
import { IsUUID } from 'class-validator';
import { Category } from '../model/category.model';

@InputType()
export class ProductCreateInput {

    @Field(() => String, { nullable: true })
    id?: string;

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

    @Field(() => String, { nullable: true })
    generalDimensions: string;

    @Field(() => String, { nullable: true })
    delivery: string;

    @Field(() => String, { nullable: true })
    material: string;

    @IsUUID()
    @Field(() => String, { nullable: true })
    categoryId: string;

    @Field(() => Date, { nullable: true })
    createdAt?: Date | string;

    @Field(() => Date, { nullable: true })
    updatedAt?: Date | string;

}

@ArgsType()
export class CreateOneProductArgs {
    @Field(() => ProductCreateInput, { nullable: false })
    @Type(() => ProductCreateInput)
    data!: ProductCreateInput;
}

