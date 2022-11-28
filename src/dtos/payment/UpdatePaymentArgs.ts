import { ArgsType, Field } from '@nestjs/graphql';
import { PaymentUpdateInput } from '@dtos/payment/PaymentUpdateInput';
import { PaymentWhereUniqueInput } from '@dtos/payment/PaymentWhereUniqueInput';

@ArgsType()
class UpdatePaymentArgs {
  @Field(() => PaymentWhereUniqueInput, { nullable: false })
  where!: PaymentWhereUniqueInput;

  @Field(() => PaymentUpdateInput, { nullable: false })
  data!: PaymentUpdateInput;
}

export { UpdatePaymentArgs };
