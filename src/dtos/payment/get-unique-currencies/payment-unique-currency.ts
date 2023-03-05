import { Field, ObjectType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsString } from 'class-validator';

@ObjectType()
export class PaymentUniqueCurrency {
  @Field(() => String, {
    nullable: false,
  })
  @IsString()
  @Type(() => String)
  currency?: string;
}
