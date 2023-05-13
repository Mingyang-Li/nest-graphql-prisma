import { Field, InputType, Float } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

@InputType({
  isAbstract: true,
  description: undefined,
})
export class FloatNullableFilter {
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  @Type(() => Number)
  equals?: number | null;

  @IsOptional()
  @Field(() => [Float], {
    nullable: true,
  })
  @Type(() => Number)
  in?: number[] | null;

  @IsOptional()
  @Field(() => [Float], {
    nullable: true,
  })
  @Type(() => Number)
  notIn?: number[] | null;

  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  @Type(() => Number)
  lt?: number;

  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  @Type(() => Number)
  lte?: number;

  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  @Type(() => Number)
  gt?: number;

  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  @Type(() => Number)
  gte?: number;

  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  @Type(() => Number)
  not?: number;
}
