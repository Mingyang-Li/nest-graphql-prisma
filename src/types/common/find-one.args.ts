import { Field, InputType } from '@nestjs/graphql';
import { z } from 'zod';

@InputType()
export class FindOneWhereInput {
  @Field(() => String, { nullable: false })
  id: string;
}

@InputType()
export class FindOneArgs {
  @Field(() => FindOneWhereInput, { nullable: false })
  where: FindOneWhereInput;
}

export const StringIdSchema = z
  .string()
  .min(1)
  .refine((v) => {
    if (v.includes(' ')) {
      return 'ID cannot contain space characters';
    }
  });
