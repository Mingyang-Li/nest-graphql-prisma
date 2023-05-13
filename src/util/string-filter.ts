import { Field, InputType } from '@nestjs/graphql';
import { QueryMode } from './query-mode';
import { IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

@InputType({
  isAbstract: true,
})
export class StringFilter {
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  @Type(() => String)
  equals?: string;

  @IsOptional()
  @Field(() => [String], {
    nullable: true,
  })
  @Type(() => String)
  in?: string[];

  @IsOptional()
  @Field(() => [String], {
    nullable: true,
  })
  @Type(() => String)
  notIn?: string[];

  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  @Type(() => String)
  lt?: string;

  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  @Type(() => String)
  lte?: string;

  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  @Type(() => String)
  gt?: string;

  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  @Type(() => String)
  gte?: string;

  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  @Type(() => String)
  contains?: string;

  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  @Type(() => String)
  startsWith?: string;

  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  @Type(() => String)
  endsWith?: string;

  @IsOptional()
  @Field(() => QueryMode, {
    nullable: true,
  })
  mode?: QueryMode;

  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  @Type(() => String)
  not?: string;
}
