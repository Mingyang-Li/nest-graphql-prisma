import { PaymentUpdateInput } from '@/dtos/payment-update.input';
import { PaymentWhereUniqueInput } from '@/dtos/payment-where-unique.input';
import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
class PaymentUpdateArgs {
  @Field(() => PaymentWhereUniqueInput, { nullable: false })
  where!: PaymentWhereUniqueInput;

  @Field(() => PaymentUpdateInput, { nullable: false })
  data!: PaymentUpdateInput;
}

export { PaymentUpdateArgs };
