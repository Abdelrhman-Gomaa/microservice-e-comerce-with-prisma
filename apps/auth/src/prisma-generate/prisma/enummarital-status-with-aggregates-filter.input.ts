import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { maritalStatus } from './marital-status.enum';
import { NestedEnummaritalStatusWithAggregatesFilter } from './nested-enummarital-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnummaritalStatusFilter } from './nested-enummarital-status-filter.input';

@InputType()
export class EnummaritalStatusWithAggregatesFilter {

    @Field(() => maritalStatus, {nullable:true})
    equals?: keyof typeof maritalStatus;

    @Field(() => [maritalStatus], {nullable:true})
    in?: Array<keyof typeof maritalStatus>;

    @Field(() => [maritalStatus], {nullable:true})
    notIn?: Array<keyof typeof maritalStatus>;

    @Field(() => NestedEnummaritalStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnummaritalStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnummaritalStatusFilter, {nullable:true})
    _min?: NestedEnummaritalStatusFilter;

    @Field(() => NestedEnummaritalStatusFilter, {nullable:true})
    _max?: NestedEnummaritalStatusFilter;
}
