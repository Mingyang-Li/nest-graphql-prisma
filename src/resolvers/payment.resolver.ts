import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { PaymentService } from '@/services/payment.service';
import { Logger } from '@nestjs/common';
import { Payment } from '@/dtos/Payment';
import { PaymentCreateArgs } from '@/dtos/payment-create.args';
import { PaymentFindManyArgs } from '@/dtos/payment-find-many.args';
import { PaymentFindUniqueArgs } from '@/dtos/payment-find-unique.args';
import { PaymentUpdateArgs } from '@/dtos/payment-update.args';

@Resolver(() => Payment)
export class PaymentResolver {
  private readonly logger = new Logger(PaymentResolver.name);

  constructor(
    private readonly paymentService: PaymentService,
    private readonly pubSub: PubSub,
  ) {}

  @Mutation(() => Payment)
  public async createPayment(
    @Args() args: PaymentCreateArgs,
  ): Promise<Payment> {
    this.logger.log(`Creating a payment`);
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
    this.logger.log(`Updating a payment`);
    const updatedPayment = await this.paymentService.update({
      ...args,
      data: {
        updatedAt: new Date(),
      },
    });
    this.pubSub.publish('paymentLatestUpdated', {
      paymentLatestUpdated: updatedPayment,
    });
    return updatedPayment;
  }

  @Query(() => [Payment])
  public async payments(@Args() args: PaymentFindManyArgs): Promise<Payment[]> {
    this.logger.log(`Getting a list of payments`);
    return this.paymentService.findMany(args);
  }

  @Query(() => Payment)
  public async payment(@Args() args: PaymentFindUniqueArgs): Promise<Payment> {
    this.logger.log(`Getting one payment`);
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
