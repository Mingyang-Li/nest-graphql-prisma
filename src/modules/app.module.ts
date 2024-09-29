import { Module } from '@nestjs/common';
import { GqlModule } from '@/modules/gql.module';

@Module({
  imports: [GqlModule],
})
export class AppModule {}
