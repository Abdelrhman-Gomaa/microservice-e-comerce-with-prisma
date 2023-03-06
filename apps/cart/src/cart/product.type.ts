import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Construction {
    @Field()
    generalDimensions: string;

    @Field()
    delivery: string;

    @Field()
    material: string;
}