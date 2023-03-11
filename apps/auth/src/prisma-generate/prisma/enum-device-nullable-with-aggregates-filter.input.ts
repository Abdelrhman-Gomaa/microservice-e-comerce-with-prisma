import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Device } from './device.enum';
import { NestedEnumDeviceNullableWithAggregatesFilter } from './nested-enum-device-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumDeviceNullableFilter } from './nested-enum-device-nullable-filter.input';

@InputType()
export class EnumDeviceNullableWithAggregatesFilter {

    @Field(() => Device, {nullable:true})
    equals?: keyof typeof Device;

    @Field(() => [Device], {nullable:true})
    in?: Array<keyof typeof Device>;

    @Field(() => [Device], {nullable:true})
    notIn?: Array<keyof typeof Device>;

    @Field(() => NestedEnumDeviceNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumDeviceNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumDeviceNullableFilter, {nullable:true})
    _min?: NestedEnumDeviceNullableFilter;

    @Field(() => NestedEnumDeviceNullableFilter, {nullable:true})
    _max?: NestedEnumDeviceNullableFilter;
}
