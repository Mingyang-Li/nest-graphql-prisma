import { Module, Scope } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PaymentModule } from './modules/payment.module';
import { join } from 'path';
import { ScheduleModule } from '@nestjs/schedule';
import { APP_INTERCEPTOR } from '@nestjs/core/constants';
import { LoggingInterceptor } from '@/interceptors/logging.interceptor';

@Module({
  imports: [
    PaymentModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
      introspection: true,
      playground: true,
      installSubscriptionHandlers: true,
      subscriptions: {
        'subscriptions-transport-ws': {
          path: '/graphql',
        },
        'graphql-ws': true,
      },
    }),
    ScheduleModule.forRoot(),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      scope: Scope.REQUEST,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {}
