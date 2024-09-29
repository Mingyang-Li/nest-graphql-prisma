import { FindOneArgs } from '@/types/commons/find-one.args';
import {
  Args,
  Field,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => String, { nullable: true })
  firstName?: string;

  @Field(() => String, { nullable: true })
  lastName?: string;
}

@ObjectType()
export class UserFindManyResponse {
  @Field(() => [User], { nullable: false })
  items: User[];
}

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
