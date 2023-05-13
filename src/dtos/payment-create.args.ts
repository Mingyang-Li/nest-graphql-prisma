import { ArgsType, Field } from '@nestjs/graphql';
import { PaymentCreateInput } from '@/dtos/payment-create.input';

@ArgsType()
class PaymentCreateArgs {
  @Field(() => PaymentCreateInput, { nullable: false })
  data!: PaymentCreateInput;
}

export { PaymentCreateArgs };
