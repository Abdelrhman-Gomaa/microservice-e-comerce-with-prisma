import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class StripeWebhook {

    @Field(() => String, { nullable: false })
    id: string;

    @Field(() => String, { nullable: true })
    webhookIdOnStripe?: string;

    @Field(() => String, { nullable: true })
    secret?: string;

    @Field(() => String, { nullable: true })
    url?: string;

    @Field(() => Date, { nullable: true })
    createdAt?: Date | string;

    @Field(() => Date, { nullable: true })
    updatedAt?: Date | string;
}

@ObjectType()
export class StripeCustomer {

    @Field(() => String, { nullable: false })
    id: string;

    @Field(() => String, { nullable: true })
    stripeCustomerId?: string;

    @Field(() => String, { nullable: true })
    userId?: string;

    @Field(() => Date, { nullable: true })
    createdAt?: Date | string;

    @Field(() => Date, { nullable: true })
    updatedAt?: Date | string;
}

