import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PaymentModule } from './payment/payment.module';
import { join } from 'path';

@Module({
  imports: [
    PaymentModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      definitions: {
        path: join(process.cwd(), 'src/schema.graphql'),
      },
      playground: true,
    }),
  ],
})
export class AppModule {}
