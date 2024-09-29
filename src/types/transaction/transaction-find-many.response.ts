import { Field, ObjectType } from '@nestjs/graphql';
import { Transaction } from '@/models/transaction';

@ObjectType()
export class TransactionFindManyResponse {
  @Field(() => [Transaction], { nullable: false })
  items: Transaction[];
}
