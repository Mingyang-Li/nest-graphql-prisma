import { ArgsType, Field } from '@nestjs/graphql';
import { PaymentWhereUniqueInput } from '@/dtos/payment/payment-get-one/PaymentWhereUniqueInput';
import { PaymentUpdateInput } from '@/dtos/payment/payment-update/PaymentUpdateInput';

@ArgsType()
class PaymentUpdateArgs {
  @Field(() => PaymentWhereUniqueInput, { nullable: false })
  where!: PaymentWhereUniqueInput;

  @Field(() => PaymentUpdateInput, { nullable: false })
  data!: PaymentUpdateInput;
}

export { PaymentUpdateArgs };
