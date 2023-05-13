import { z } from 'zod';

export const envConfigSchema = z.object({
  POSTGRESQL_URL: z.string(),
});

export type EnvConfig = z.infer<typeof envConfigSchema>;

export const validate = (obj: any): EnvConfig => {
  try {
    return envConfigSchema.parse(obj);
  } catch (error) {
    throw error;
  }
};
