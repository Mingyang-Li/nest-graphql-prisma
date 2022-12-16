import { ArgsType, Field } from '@nestjs/graphql';
import { PaymentWhereUniqueInput } from '@/dtos/payment/get-payment/PaymentWhereUniqueInput';

@ArgsType()
class PaymentFindUniqueArgs {
  @Field(() => PaymentWhereUniqueInput, { nullable: true })
  where!: PaymentWhereUniqueInput;
}

export { PaymentFindUniqueArgs };
