import { Field, Float, ObjectType } from '@nestjs/graphql';
import { User } from './user';
import { Transaction } from './transaction';

@ObjectType()
export class Account {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  type?: string;

  @Field(() => Date, { nullable: true })
  dateActivated?: Date;

  @Field(() => String, { nullable: true })
  currency?: string;

  @Field(() => Float, { nullable: true })
  balance?: number;

  @Field(() => String, { nullable: true })
  userId?: string;

  @Field(() => User, { nullable: true })
  user?: User;

  @Field(() => [Transaction], { nullable: true })
  transactionsMadeFromThisAccount?: Transaction[];

  @Field(() => [Transaction], { nullable: true })
  transactionsMadeToThisAccount?: Transaction[];
}
