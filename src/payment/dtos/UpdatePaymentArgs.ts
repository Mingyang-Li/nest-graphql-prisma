import { ArgsType, Field } from '@nestjs/graphql';
import { PaymentUpdateInput } from 'src/payment/dtos/PaymentUpdateInput';
import { PaymentWhereUniqueInput } from 'src/payment/dtos/PaymentWhereUniqueInput';

@ArgsType()
class UpdatePaymentArgs {
  @Field(() => PaymentWhereUniqueInput, { nullable: false })
  where!: PaymentWhereUniqueInput;

  @Field(() => PaymentUpdateInput, { nullable: false })
  data!: PaymentUpdateInput;
}

export { UpdatePaymentArgs };
