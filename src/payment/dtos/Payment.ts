import { ObjectType } from '@nestjs/graphql';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

@ObjectType()
class Payment {
  @IsString()
  @IsOptional()
  id?: string | null;

  @IsNumber()
  @IsOptional()
  amount?: number | null;

  @IsString()
  @IsOptional()
  currency?: string | null;

  @IsDate()
  @IsOptional()
  dateOfPayment?: Date | string | null;

  @IsString()
  @IsOptional()
  from?: string | null;

  @IsString()
  @IsOptional()
  to?: string | null;

  @IsDate()
  @IsOptional()
  createdAt?: Date | string;

  @IsDate()
  @IsOptional()
  updatedAt?: Date | string;

  @IsDate()
  @IsOptional()
  archivedAt?: Date | string | null;
}

export { Payment };
