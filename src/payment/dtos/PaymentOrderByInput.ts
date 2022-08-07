import { InputType, Field } from '@nestjs/graphql';
import { SortOrder } from '../../util/SortOrder';

@InputType({
  isAbstract: true,
  description: undefined,
})
class PaymentOrderByInput {
  @Field(() => SortOrder, {
    nullable: true,
  })
  id?: SortOrder;

  @Field(() => SortOrder, {
    nullable: true,
  })
  amount?: SortOrder;

  @Field(() => SortOrder, {
    nullable: true,
  })
  currency?: SortOrder;

  @Field(() => SortOrder, {
    nullable: true,
  })
  dateOfPayment?: SortOrder;

  @Field(() => SortOrder, {
    nullable: true,
  })
  from?: SortOrder;

  @Field(() => SortOrder, {
    nullable: true,
  })
  to?: SortOrder;

  @Field(() => SortOrder, {
    nullable: true,
  })
  createdAt?: SortOrder;

  @Field(() => SortOrder, {
    nullable: true,
  })
  updatedAt?: SortOrder;

  @Field(() => SortOrder, {
    nullable: true,
  })
  archivedAt?: SortOrder;
}

export { PaymentOrderByInput };
