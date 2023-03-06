import { Type } from 'class-transformer';
import { Field, ArgsType } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class CategoryCreateInput {

    @Field(() => String, { nullable: false })
    title: string;

}

@ArgsType()
export class CreateOneCategoryArgs {
    @Field(() => CategoryCreateInput, {nullable:false})
    @Type(() => CategoryCreateInput)
    data!: CategoryCreateInput;
}

@InputType()
export class SubCategoryCreateInput {

    @Field(() => String, { nullable: false })
    title: string;

    @IsUUID()
    @Field(() => String, { nullable: false })
    categoryId: string;

}

@ArgsType()
export class CreateOneSubCategoryArgs {
    @Field(() => SubCategoryCreateInput, {nullable:false})
    @Type(() => SubCategoryCreateInput)
    data!: SubCategoryCreateInput;
}

@InputType()
export class ProductForOneCategoryInput {

    @Field(() => String, { nullable: false })
    id: string;

}

@ArgsType()
export class ProductForOneCategoryArgs {
    @Field(() => ProductForOneCategoryInput, {nullable:false})
    @Type(() => ProductForOneCategoryInput)
    data!: ProductForOneCategoryInput;
}
