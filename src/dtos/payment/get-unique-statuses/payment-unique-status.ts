import { Field, ObjectType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsString } from 'class-validator';

@ObjectType()
export class PaymentUniqueStatus {
  @Field(() => String, {
    nullable: false,
  })
  @IsString()
  @Type(() => String)
  status?: string;
}
