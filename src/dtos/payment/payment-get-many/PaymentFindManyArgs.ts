import { ArgsType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { PaymentOrderByInput } from '@/dtos/payment/payment-get-many/PaymentOrderByInput';
import { PaymentWhereInput } from '@/dtos/payment/payment-get-many/PaymentWhereInput';

@ArgsType()
class PaymentFindManyArgs {
  @Field(() => PaymentWhereInput, { nullable: true })
  @Type(() => PaymentWhereInput)
  where?: PaymentWhereInput;

  @Field(() => [PaymentOrderByInput], { nullable: true })
  @Type(() => PaymentOrderByInput)
  orderBy?: Array<PaymentOrderByInput>;

  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @Field(() => Number, { nullable: true, defaultValue: 10 })
  @Type(() => Number)
  take?: number;
}

export { PaymentFindManyArgs };
