import { HelperService } from './../common/helper.service';
import { Module } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions';
import { PaymentResolver } from 'src/payment/payment.resolver';
import { PaymentService } from './payment.service';
import { PrismaService } from 'src/common/prisma.service';

@Module({
  providers: [
    PrismaService,
    PaymentService,
    PaymentResolver,
    PubSub,
    HelperService,
  ],
  exports: [PaymentService],
})
export class PaymentModule {}
