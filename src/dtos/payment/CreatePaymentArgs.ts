import { ArgsType, Field } from '@nestjs/graphql';
import { PaymentCreateInput } from '@dtos/payment/PaymentCreateInput';

@ArgsType()
class CreatePaymentArgs {
  @Field(() => PaymentCreateInput, { nullable: false })
  data!: PaymentCreateInput;
}

export { CreatePaymentArgs };
