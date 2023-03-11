import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { maritalStatus } from './marital-status.enum';
import { NestedEnummaritalStatusFilter } from './nested-enummarital-status-filter.input';

@InputType()
export class EnummaritalStatusFilter {

    @Field(() => maritalStatus, {nullable:true})
    equals?: keyof typeof maritalStatus;

    @Field(() => [maritalStatus], {nullable:true})
    in?: Array<keyof typeof maritalStatus>;

    @Field(() => [maritalStatus], {nullable:true})
    notIn?: Array<keyof typeof maritalStatus>;

    @Field(() => NestedEnummaritalStatusFilter, {nullable:true})
    not?: NestedEnummaritalStatusFilter;
}
