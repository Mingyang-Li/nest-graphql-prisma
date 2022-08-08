import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { CreatePaymentArgs } from 'src/payment/dtos/CreatePaymentArgs';
import { UpdatePaymentArgs } from 'src/payment/dtos/UpdatePaymentArgs';
import { Payment } from './dtos/Payment';
import { PaymentFindManyArgs } from './dtos/PaymentFindManyArgs';
import { PaymentService } from './payment.service';

@Resolver(() => Payment)
export class PaymentResolver {
  constructor(private paymentService: PaymentService, private pubSub: PubSub) {}

  @Mutation(() => Payment)
  public async createPayment(
    @Args() args: CreatePaymentArgs,
  ): Promise<Payment> {
    const newPayment = await this.paymentService.create(args);
    this.pubSub.publish('paymentsUpdated', newPayment);
    return newPayment;
  }

  @Mutation(() => Payment)
  public async updatePayment(
    @Args() args: UpdatePaymentArgs,
  ): Promise<Payment> {
    const updatedPayment = await this.paymentService.update(args);
    this.pubSub.publish('paymentsUpdated', updatedPayment);
    return updatedPayment;
  }

  @Query(() => [Payment])
  public async payments(@Args() args: PaymentFindManyArgs): Promise<Payment[]> {
    return this.paymentService.findMany(args);
  }

  @Subscription(() => [Payment])
  public async subscribePayments() {
    return this.pubSub.asyncIterator('paymentsUpdated');
  }
}
