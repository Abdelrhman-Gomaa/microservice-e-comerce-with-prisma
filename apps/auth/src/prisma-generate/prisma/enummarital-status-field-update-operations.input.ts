import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { maritalStatus } from './marital-status.enum';

@InputType()
export class EnummaritalStatusFieldUpdateOperationsInput {

    @Field(() => maritalStatus, {nullable:true})
    set?: keyof typeof maritalStatus;
}
