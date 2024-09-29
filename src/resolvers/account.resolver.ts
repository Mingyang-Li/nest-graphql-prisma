import { FindOneArgs } from '@/types/commons/find-one.args';
import {
  Args,
  Field,
  Float,
  Info,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from '@nestjs/graphql';
import { GraphQLResolveInfo } from 'graphql';

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
}

@ObjectType()
export class AccountFindManyResponse {
  @Field(() => [Account], { nullable: false })
  items: Account[];
}

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
