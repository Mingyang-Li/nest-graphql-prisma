import { Field, Float, ObjectType } from '@nestjs/graphql';
import { Account } from './account';

@ObjectType()
export class Transaction {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Float, { nullable: true })
  amount?: Number;

  @Field(() => String, { nullable: true })
  currency?: string;

  @Field(() => Date, { nullable: true })
  dateOfPayment?: Date;

  @Field(() => String, { nullable: true })
  status?: string;

  @Field(() => String, { nullable: true })
  fromAccountId?: string;

  @Field(() => Account, { nullable: true })
  fromAccount?: Account;

  @Field(() => String, { nullable: true })
  toAccountId?: string;

  @Field(() => Account, { nullable: true })
  toAccount?: Account;
}
