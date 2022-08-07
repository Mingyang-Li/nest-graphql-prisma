import { Injectable } from '@nestjs/common';
import { Payment, Prisma } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class PaymentService {
  constructor(private prisma: PrismaService) {}

  async create(args: any): Promise<any> {
    return this.prisma.payment.create(args);
  }

  async findMany<T extends Prisma.PaymentFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PaymentFindManyArgs>,
  ): Promise<Payment[]> {
    return this.prisma.payment.findMany(args);
  }
}
