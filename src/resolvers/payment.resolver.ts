import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { PaymentService } from '@/services/payment.service';
import {
  Payment,
  PaymentCreateArgs,
  PaymentFindManyArgs,
  PaymentFindUniqueArgs,
  PaymentUpdateArgs,
} from '@/dtos';

@Resolver(() => Payment)
export class PaymentResolver {
  constructor(
    private readonly paymentService: PaymentService,
    private readonly pubSub: PubSub,
  ) {}

  @Mutation(() => Payment)
  public async createPayment(
    @Args() args: PaymentCreateArgs,
  ): Promise<Payment> {
    const newPayment = await this.paymentService.create(args);
    this.pubSub.publish('paymentLatestUpdated', {
      paymentLatestUpdated: newPayment,
    });
    return newPayment;
  }

  @Mutation(() => Payment)
  public async updatePayment(
    @Args() args: PaymentUpdateArgs,
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
  public async paymentLatestUpdated(): Promise<
    AsyncIterator<unknown, any, undefined>
  > {
    return this.pubSub.asyncIterator('paymentLatestUpdated');
  }

  @Query(() => [Payment])
  public async uniquePaymentCurrencies(): Promise<Payment[]> {
    return await this.paymentService.findMany({
      distinct: ['currency'],
      select: {
        currency: true,
      },
    });
  }

  @Query(() => [Payment])
  public async uniquePaymentStatuses(): Promise<Payment[]> {
    return await this.paymentService.findMany({
      distinct: ['status'],
      select: {
        status: true,
      },
    });
  }
}
