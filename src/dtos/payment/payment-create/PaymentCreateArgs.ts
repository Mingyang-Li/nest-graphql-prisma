import { ArgsType, Field } from '@nestjs/graphql';
import { PaymentCreateInput } from '@/dtos/payment/payment-create/PaymentCreateInput';

@ArgsType()
class PaymentCreateArgs {
  @Field(() => PaymentCreateInput, { nullable: false })
  data!: PaymentCreateInput;
}

export { PaymentCreateArgs };
