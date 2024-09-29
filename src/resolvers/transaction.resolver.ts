import { Args, Query, Resolver } from '@nestjs/graphql';
import { Transaction } from '@/models/transaction';
import { TransactionFindManyResponse } from '@/types/transaction/transaction-find-many.response';
import { FindOneArgs } from '@/types/commons/find-one.args';

@Resolver()
export class TransactionResolver {
  @Query(() => TransactionFindManyResponse)
  public async FIND_MANY_TRANSACTIONS() {}

  @Query(() => Transaction)
  public async FIND_ONE_TRANSACTION(
    @Args('args', { type: () => FindOneArgs }) args: FindOneArgs,
  ) {}

  @Query(() => Transaction)
  public async CREATE_TRANSACTION() {}

  @Query(() => Transaction)
  public async UPDATE_TRANSACTION() {}
}
