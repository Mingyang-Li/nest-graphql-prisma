import { Module } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions';
import { PrismaModule, PrismaService } from 'nestjs-prisma';
import { PaymentResolver } from 'src/payment/payment.resolver';
import { PaymentService } from './payment.service';

@Module({
  imports: [PrismaModule],
  providers: [PrismaService, PaymentService, PaymentResolver, PubSub],
  exports: [PaymentService],
})
export class PaymentModule {}
