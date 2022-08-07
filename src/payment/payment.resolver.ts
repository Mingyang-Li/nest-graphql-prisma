import { Query, Resolver } from '@nestjs/graphql';
import { Payment } from './dtos/Payment';
import { PaymentService } from './payment.service';

@Resolver(() => [])
export class PaymentResolver {
  constructor(private service: PaymentService) {}

  public async createPayment(data: any) {
    return await this.service.create(data);
  }

  public async updatePayment() {
    return 0;
  }

  @Query(() => [Payment])
  public async payments() {
    return 0;
  }

  public async deletePayments() {
    return 0;
  }

  public async subscribePayments() {
    return 0;
  }
}
