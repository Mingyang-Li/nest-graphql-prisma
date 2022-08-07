import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreatePaymentArgs } from 'src/payment/dtos/CreatePaymentArgs';
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

  // public async updatePayment() {
  //   return 0;
  // }

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
