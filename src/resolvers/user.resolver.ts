import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FindOneArgs } from '@/types/common/find-one.args';
import { UserFindManyResponse } from '@/types/user/user-find-many.response';
import { User } from '@/models/user';

@Resolver()
export class UserResolver {
  @Query(() => UserFindManyResponse)
  public async FIND_MANY_USERS(): Promise<UserFindManyResponse> {
    return {
      items: [],
    };
  }

  @Query(() => User)
  public async FIND_ONE_USER(
    @Args('args', { type: () => FindOneArgs }) args: FindOneArgs,
  ): Promise<User> {
    return {};
  }

  @Mutation(() => User)
  public async CREATE_USER(): Promise<User> {
    return {};
  }

  @Mutation(() => User)
  public async UPDATE_USER(): Promise<User> {
    return {};
  }
}
