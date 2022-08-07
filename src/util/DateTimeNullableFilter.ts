import { Field, InputType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

@InputType({
  isAbstract: true,
  description: undefined,
})
export class DateTimeNullableFilter {
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  @Type(() => Date)
  equals?: Date | null;

  @IsOptional()
  @Field(() => [Date], {
    nullable: true,
  })
  @Type(() => Date)
  in?: Date[] | null;

  @IsOptional()
  @Field(() => [Date], {
    nullable: true,
  })
  @Type(() => Date)
  notIn?: Date[] | null;

  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  @Type(() => Date)
  lt?: Date;

  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  @Type(() => Date)
  lte?: Date;

  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  @Type(() => Date)
  gt?: Date;

  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  @Type(() => Date)
  gte?: Date;

  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  @Type(() => Date)
  not?: Date;
}
