import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/modules/app.module';
import { env, validateEnv } from '@/utils/env';

const bootstrap = async () => {
  console.log(`Validating environment variables...`);
  const envValidation = validateEnv();
  if (envValidation.isErr()) {
    console.error(envValidation.error.message);
    return;
  }
  console.log(`process.env validation successful`);

  const app = await NestFactory.create(AppModule);
  await app.listen(env.PORT || 3000);
};
bootstrap();
