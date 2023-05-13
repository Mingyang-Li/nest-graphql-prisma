import { PaymentOrderByInput } from '@/dtos/payment-order-by.input';
import { PaymentWhereInput } from '@/dtos/payment-where.input';
import { ArgsType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';

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
