import { ArgsType, Field } from '@nestjs/graphql';
import { PaymentWhereUniqueInput } from '@/dtos/payment/get-payment/PaymentWhereUniqueInput';
import { PaymentUpdateInput } from '@/dtos/payment/update-payment/PaymentUpdateInput';

@ArgsType()
class UpdatePaymentArgs {
  @Field(() => PaymentWhereUniqueInput, { nullable: false })
  where!: PaymentWhereUniqueInput;

  @Field(() => PaymentUpdateInput, { nullable: false })
  data!: PaymentUpdateInput;
}

export { UpdatePaymentArgs };
