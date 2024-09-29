import { Field, ObjectType } from '@nestjs/graphql';
import { Account } from './account';
import { SystemFields } from './system-fields';

@ObjectType()
export class User extends SystemFields {
  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => String, { nullable: true })
  firstName?: string;

  @Field(() => String, { nullable: true })
  lastName?: string;

  @Field(() => String, { nullable: true })
  invitedByUserId?: string;

  @Field(() => User, { nullable: true })
  invitedByUser?: User;

  @Field(() => [User], { nullable: true })
  usersInvited?: User[];

  @Field(() => [Account], { nullable: true })
  accountsOfThisUser?: Account[];
}
