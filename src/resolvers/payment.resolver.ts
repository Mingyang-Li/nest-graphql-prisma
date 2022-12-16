import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { CreatePaymentArgs } from '@/dtos/payment/create-payment/CreatePaymentArgs';
import { PaymentFindUniqueArgs } from '@/dtos/payment/get-payment/PaymentFindUniqueArgs';
import { PaymentFindManyArgs } from '@/dtos/payment/get-payments/PaymentFindManyArgs';
import { Payment } from '@/dtos/payment/Payment';
import { UpdatePaymentArgs } from '@/dtos/payment/update-payment/UpdatePaymentArgs';
import { PaymentService } from '@/services/payment.service';

@Resolver(() => Payment)
export class PaymentResolver {
  constructor(
    private readonly paymentService: PaymentService,
    private readonly pubSub: PubSub,
  ) {}

  @Mutation(() => Payment)
  public async createPayment(
    @Args() args: CreatePaymentArgs,
  ): Promise<Payment> {
    const newPayment = await this.paymentService.create(args);
    this.pubSub.publish('paymentLatestUpdated', {
      paymentLatestUpdated: newPayment,
    });
    return newPayment;
  }

  @Mutation(() => Payment)
  public async updatePayment(
    @Args() args: UpdatePaymentArgs,
  ): Promise<Payment> {
    const updatedPayment = await this.paymentService.update(args);
    this.pubSub.publish('paymentLatestUpdated', {
      paymentLatestUpdated: updatedPayment,
    });
    return updatedPayment;
  }

  @Query(() => [Payment])
  public async payments(@Args() args: PaymentFindManyArgs): Promise<Payment[]> {
    return this.paymentService.findMany(args);
  }

  @Query(() => Payment)
  public async payment(@Args() args: PaymentFindUniqueArgs): Promise<Payment> {
    return this.paymentService.findOne(args);
  }

  @Subscription(() => Payment)
  public async paymentLatestUpdated() {
    return this.pubSub.asyncIterator('paymentLatestUpdated');
  }
}