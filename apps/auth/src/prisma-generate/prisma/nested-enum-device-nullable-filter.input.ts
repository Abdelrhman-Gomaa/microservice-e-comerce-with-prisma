import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Device } from './device.enum';

@InputType()
export class NestedEnumDeviceNullableFilter {

    @Field(() => Device, {nullable:true})
    equals?: keyof typeof Device;

    @Field(() => [Device], {nullable:true})
    in?: Array<keyof typeof Device>;

    @Field(() => [Device], {nullable:true})
    notIn?: Array<keyof typeof Device>;

    @Field(() => NestedEnumDeviceNullableFilter, {nullable:true})
    not?: NestedEnumDeviceNullableFilter;
}
