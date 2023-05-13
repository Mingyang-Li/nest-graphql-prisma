import { Field, InputType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

@InputType({
  isAbstract: true,
})
export class BooleanFilter {
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  @Type(() => Boolean)
  equals?: boolean;

  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  @Type(() => Boolean)
  not?: boolean;
}
