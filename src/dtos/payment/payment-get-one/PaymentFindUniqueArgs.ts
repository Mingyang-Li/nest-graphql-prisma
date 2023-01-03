import { ArgsType, Field } from '@nestjs/graphql';
import { PaymentWhereUniqueInput } from '@/dtos/payment/payment-get-one/PaymentWhereUniqueInput';

@ArgsType()
class PaymentFindUniqueArgs {
  @Field(() => PaymentWhereUniqueInput, { nullable: true })
  where!: PaymentWhereUniqueInput;
}

export { PaymentFindUniqueArgs };
