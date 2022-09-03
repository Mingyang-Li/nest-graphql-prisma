import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
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

  // @Subscription(() => [Payment])
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // public async subscribePayments(@Args() args: PaymentFindManyArgs) {
  // return an Payment array every time updatedPayment and createPayment is executed successfully
  // the returned array will have to match the filter criteria from args
  // return [args];
  // }
}
