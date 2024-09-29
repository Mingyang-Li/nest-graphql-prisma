import { Module } from '@nestjs/common';
import { AutoSchemaFileValue, GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { join } from 'path';
import { env } from '@/utils/env';
import { UserResolver } from '@/resolvers/user.resolver';
import { AccountResolver } from '@/resolvers/account.resolver';

const autoSchemaFile: AutoSchemaFileValue =
  env.NODE_ENV === 'local' ? join(process.cwd(), 'src/schema.graphql') : false;

@Module({
  imports: [
    UserResolver,
    AccountResolver,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile,
      introspection: env.NODE_ENV !== 'production',
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      path: '/api/graphql',
    }),
  ],
})
export class GqlModule {}
