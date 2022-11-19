import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { Payment, Prisma } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import { HelperService } from 'src/common/helper.service';

@Injectable()
export class PaymentService {
  constructor(
    private prisma: PrismaService,
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
    args: Prisma.SelectSubset<T, Prisma.PaymentFindFirstArgs>,
  ): Promise<Payment> {
    return await this.prisma.payment.findUnique(args);
  }

  // trigger this every 12 hours
  @Cron(CronExpression.EVERY_12_HOURS)
  protected async keepDBAlive(): Promise<Payment> {
    const randomPayments = await this.prisma.payment.findMany({
      where: {
        amount: {
          gte: 100,
          lte: 1000,
        },
      },
      take: 5,
    });
    const randomPayment =
      randomPayments[
        this.helperService.randomNumBetween(0, randomPayments.length)
      ];
    const updated = await this.prisma.payment.update({
      where: {
        id: randomPayment.id,
      },
      data: {
        amount: this.helperService.randomNumBetween(100, 1000),
      },
    });
    return updated;
  }
}
