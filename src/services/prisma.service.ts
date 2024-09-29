import { Prisma, PrismaClient } from '@prisma/client';

const prismaClientOptions: Prisma.Subset<
  Prisma.PrismaClientOptions,
  Prisma.PrismaClientOptions
> = {
  log: ['query', 'warn', 'error', 'info'],
};

export const prismaReadService = new PrismaClient(prismaClientOptions);

export const prismaWriteService = new PrismaClient(prismaClientOptions);
