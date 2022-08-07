import { Args, Query, Resolver } from '@nestjs/graphql';
import { Payment } from './dtos/Payment';
import { PaymentFindManyArgs } from './dtos/PaymentFindManyArgs';
import { PaymentService } from './payment.service';

@Resolver(() => Payment)
export class PaymentResolver {
  constructor(private paymentService: PaymentService) {}

  // public async createPayment(data: any) {
  //   return await this.paymentService.create(data);
  // }

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
