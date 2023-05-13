import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { DateTimeNullableFilter } from '@/util/datetime-nullable-filter';
import { FloatNullableFilter } from '@/util/float-nullable-filter';
import { StringFilter } from '@/util/string-filter';
import { StringNullableFilter } from '@/util/string-nullable-filter';
import { BooleanFilter } from '@/util/boolean-filter';

@InputType()
class PaymentWhereInput {
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  amount?: FloatNullableFilter;

  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  currency?: StringNullableFilter;

  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  dateOfPayment?: DateTimeNullableFilter;

  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  from?: StringNullableFilter | string | null;

  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  to?: StringNullableFilter | string | null;

  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  status?: StringNullableFilter | string | null;

  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  createdAt?: DateTimeNullableFilter;

  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeNullableFilter;

  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  archivedAt?: DateTimeNullableFilter;

  @Type(() => BooleanFilter)
  @IsOptional()
  @Field(() => BooleanFilter, {
    nullable: true,
  })
  archived?: BooleanFilter;
}

export { PaymentWhereInput };
