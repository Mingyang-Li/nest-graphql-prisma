import { Field, ObjectType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

@ObjectType()
class Payment {
  @Field(() => String, {
    nullable: true,
  })
  @IsString()
  @IsOptional()
  @Type(() => String)
  id?: string | null;

  @Field(() => Number, {
    nullable: true,
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  amount?: number | null;

  @Field(() => String, {
    nullable: true,
  })
  @IsString()
  @IsOptional()
  @Type(() => String)
  currency?: string | null;

  @Field(() => Date, {
    nullable: true,
  })
  @IsDate()
  @IsOptional()
  @Type(() => Date)
  dateOfPayment?: Date | null;

  @Field(() => String, {
    nullable: true,
  })
  @IsString()
  @IsOptional()
  @Type(() => String)
  from?: string | null;

  @Field(() => String, {
    nullable: true,
  })
  @IsString()
  @IsOptional()
  @Type(() => String)
  to?: string | null;

  @Type(() => String)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  status?: string | null;

  @Field(() => Date, {
    nullable: true,
  })
  @IsDate()
  @IsOptional()
  @Type(() => Date)
  createdAt?: Date | null;

  @Field(() => Date, {
    nullable: true,
  })
  @IsDate()
  @IsOptional()
  @Type(() => Date)
  updatedAt?: Date | null;

  @Field(() => Date, {
    nullable: true,
  })
  @IsDate()
  @IsOptional()
  @Type(() => Date)
  archivedAt?: Date | null;
}

export { Payment };
