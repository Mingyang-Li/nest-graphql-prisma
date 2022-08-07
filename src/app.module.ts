import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { PaymentModule } from './payment/payment.module';
import { join } from 'path';

@Module({
  imports: [
    PaymentModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      driver: ApolloDriver,
    }),
  ],
})
export class AppModule {}
