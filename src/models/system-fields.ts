import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SystemFields {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date;

  @Field(() => Boolean, { nullable: true })
  archived?: boolean;

  @Field(() => Date, { nullable: true })
  archivedAt?: Date;
}
