import { Account } from '@/models/account';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AccountFindManyResponse {
  @Field(() => [Account], { nullable: false })
  items: Account[];
}
