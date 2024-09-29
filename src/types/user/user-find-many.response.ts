import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '@/models/user';

@ObjectType()
export class UserFindManyResponse {
  @Field(() => [User], { nullable: false })
  items: User[];
}
