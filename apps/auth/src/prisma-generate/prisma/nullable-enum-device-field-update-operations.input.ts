import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Device } from './device.enum';

@InputType()
export class NullableEnumDeviceFieldUpdateOperationsInput {

    @Field(() => Device, {nullable:true})
    set?: keyof typeof Device;
}
