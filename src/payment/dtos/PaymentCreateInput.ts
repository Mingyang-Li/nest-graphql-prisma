import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';

@InputType()
class PaymentCreateInput {
  @Type(() => Number)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  amount?: number | null;

  @Type(() => String)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  currency?: string | null;

  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  dateOfPayment?: Date | null;

  @Type(() => String)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  from?: string | null;

  @Type(() => String)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  to?: string | null;

  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  archivedAt?: Date | null;
}

export { PaymentCreateInput };
