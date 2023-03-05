import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { Payment, Prisma } from '@prisma/client';
import { HelperService } from '@/services/helper.service';
import { PrismaService } from '@/services/prisma.service';

@Injectable()
export class PaymentService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly helperService: HelperService,
  ) {}

  public async create<T extends Prisma.PaymentCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PaymentCreateArgs>,
  ): Promise<Payment> {
    return await this.prisma.payment.create(args);
  }

  public async findMany<T extends Prisma.PaymentFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PaymentFindManyArgs>,
  ): Promise<Payment[]> {
    return await this.prisma.payment.findMany(args);
  }

  public async update<T extends Prisma.PaymentUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PaymentUpdateArgs>,
  ): Promise<Payment> {
    return await this.prisma.payment.update(args);
  }

  public async findOne<T extends Prisma.PaymentFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PaymentFindUniqueArgs>,
  ): Promise<Payment> {
    return await this.prisma.payment.findUnique(args);
  }

  // trigger this every 2 hours
  @Cron(CronExpression.EVERY_2_HOURS)
  protected async keepDBAlive(): Promise<Payment> {
    const randomPayments = await this.prisma.payment.findMany({
      take: 2,
      select: { id: true },
    });
    const newPayment = randomPayments[0];
    const updated = await this.prisma.payment.update({
      where: { id: newPayment.id },
      data: { amount: this.helperService.randomNumBetween(100, 1000) },
    });
    return updated;
  }
}
