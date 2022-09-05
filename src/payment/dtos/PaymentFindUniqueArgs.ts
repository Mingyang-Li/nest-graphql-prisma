import { ArgsType, Field } from '@nestjs/graphql';
import { PaymentWhereUniqueInput } from 'src/payment/dtos/PaymentWhereUniqueInput';

@ArgsType()
class PaymentFindUniqueArgs {
  @Field(() => PaymentWhereUniqueInput, { nullable: true })
  where!: PaymentWhereUniqueInput;
}

export { PaymentFindUniqueArgs };
