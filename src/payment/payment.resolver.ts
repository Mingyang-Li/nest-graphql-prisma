import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreatePaymentArgs } from 'src/payment/dtos/CreatePaymentArgs';
import { UpdatePaymentArgs } from 'src/payment/dtos/UpdatePaymentArgs';
import { Payment } from './dtos/Payment';
import { PaymentFindManyArgs } from './dtos/PaymentFindManyArgs';
import { PaymentService } from './payment.service';

@Resolver(() => Payment)
export class PaymentResolver {
  constructor(private paymentService: PaymentService) {}

  @Mutation(() => Payment)
  public async createPayment(
    @Args() args: CreatePaymentArgs,
  ): Promise<Payment> {
    return await this.paymentService.create(args);
  }

  @Mutation(() => Payment)
  public async updatePayment(
    @Args() args: UpdatePaymentArgs,
  ): Promise<Payment | null> {
    return await this.paymentService.update(args);
  }

  @Query(() => [Payment])
  public async payments(@Args() args: PaymentFindManyArgs): Promise<Payment[]> {
    return this.paymentService.findMany(args);
  }

  // public async deletePayments() {
  //   return 0;
  // }

  // public async subscribePayments() {
  //   return 0;
  // }
}
