import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { PaymentModule } from './payment/payment.module';
import { join } from 'path';

@Module({
  imports: [
    PaymentModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      introspection: true,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
  ],
})
export class AppModule {}
