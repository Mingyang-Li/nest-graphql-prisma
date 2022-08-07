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
      autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
      playground: true,
      installSubscriptionHandlers: true,
      subscriptions: {
        'graphql-ws': true,
      },
    }),
  ],
  providers: [],
  exports: [],
})
export class AppModule {}
