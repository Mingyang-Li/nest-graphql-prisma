import { Module } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions';
import { PaymentResolver } from '@/resolvers/payment.resolver';
import { HelperService } from '@/services/helper.service';
import { PaymentService } from '@/services/payment.service';
import { PrismaService } from '@/services/prisma.service';

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
