import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
class PaymentWhereUniqueInput {
  @IsString()
  @Field(() => String)
  id!: string;
}

export { PaymentWhereUniqueInput };
