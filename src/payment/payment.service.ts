import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class PaymentService {
  constructor(private prisma: PrismaService) {}

  async create(args: any): Promise<any> {
    return this.prisma.payment.create(args);
  }
}
