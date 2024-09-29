import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GraphQLResolveInfo } from 'graphql';
import { FindOneArgs } from '@/types/commons/find-one.args';
import { AccountFindManyResponse } from '@/types/account/account-find-many.response';
import { Account } from '@/models/account';

@Resolver()
export class AccountResolver {
  @Query(() => AccountFindManyResponse)
  public async FIND_MANY_ACCOUNTS(): Promise<AccountFindManyResponse> {
    return {
      items: [],
    };
  }

  @Query(() => Account)
  public async FIND_ONE_ACCOUNT(
    @Args('args', { type: () => FindOneArgs }) args: FindOneArgs,
    @Info() info: GraphQLResolveInfo,
  ): Promise<Account> {
    return {};
  }

  @Mutation(() => Account)
  public async CREATE_ACCOUNT(): Promise<Account> {
    return {};
  }

  @Mutation(() => Account)
  public async UPDATE_ACCOUNT(): Promise<Account> {
    return {};
  }
}
