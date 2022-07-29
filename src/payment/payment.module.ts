import { Module } from '@nestjs/common';
import { PrismaModule, PrismaService } from 'nestjs-prisma';
import { PaymentService } from './payment.service';

@Module({
  imports: [PrismaModule],
  providers: [PrismaService, PaymentService],
  exports: [PaymentService],
})
export class PaymentModule {}
