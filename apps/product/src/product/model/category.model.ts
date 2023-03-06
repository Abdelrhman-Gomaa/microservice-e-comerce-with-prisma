import { Product } from './product.model';
import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SubCategory } from './sub-category.model';

@ObjectType()
export class Category {

    @Field(() => String, { nullable: false })
    id: string;

    @Field(() => String, { nullable: false })
    title: string;

    @Field(() => [Product], {nullable:true})
    products?: Array<Product>;  

    @Field(() => [SubCategory], {nullable:true})
    subCategories?: Array<SubCategory>;

    @Field(() => Date, { nullable: true })
    createdAt?: Date | string;

    @Field(() => Date, { nullable: true })
    updatedAt?: Date | string;
}
