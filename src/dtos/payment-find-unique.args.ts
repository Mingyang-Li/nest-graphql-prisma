import { PaymentWhereUniqueInput } from '@/dtos/payment-where-unique.input';
import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
class PaymentFindUniqueArgs {
  @Field(() => PaymentWhereUniqueInput, { nullable: true })
  where!: PaymentWhereUniqueInput;
}

export { PaymentFindUniqueArgs };
