import { Result, fromThrowable } from 'neverthrow';
import { z } from 'zod';
import { fromError } from 'zod-validation-error';
import * as dotenv from 'dotenv';

dotenv.config();

export const EnvSchema = z.object({
  // infrastructure-level
  NODE_ENV: z.enum(['local', 'development', 'production']),
  PORT: z.coerce.number(),

  // application-level
  DATABASE_URL: z.string(),
});

export type Env = z.infer<typeof EnvSchema>;

export const validateEnvThrowable = (): Env => {
  const validatingEnv = EnvSchema.safeParse(process.env);
  if (validatingEnv.success === false) {
    const { message } = fromError(validatingEnv.error);
    const msg = `Failed to validate environment variables. ${message}`;
    throw new Error(msg);
  }
  return validatingEnv.data;
};

export const wrapSync = <T>(fn: () => T): Result<T, Error> => {
  return fromThrowable(fn, (e) => e as Error)();
};

export const validateEnv = (): Result<Env, Error> =>
  wrapSync<Env>(validateEnvThrowable);

export const env = validateEnvThrowable();
