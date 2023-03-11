import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { maritalStatus } from './marital-status.enum';

@InputType()
export class NestedEnummaritalStatusFilter {

    @Field(() => maritalStatus, {nullable:true})
    equals?: keyof typeof maritalStatus;

    @Field(() => [maritalStatus], {nullable:true})
    in?: Array<keyof typeof maritalStatus>;

    @Field(() => [maritalStatus], {nullable:true})
    notIn?: Array<keyof typeof maritalStatus>;

    @Field(() => NestedEnummaritalStatusFilter, {nullable:true})
    not?: NestedEnummaritalStatusFilter;
}
