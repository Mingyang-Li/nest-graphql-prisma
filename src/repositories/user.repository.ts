import { ok, err, fromPromise, ResultAsync } from 'neverthrow';
import { Prisma } from '@prisma/client';
import { User } from '@/models/user';
import { prismaReadService, prismaWriteService } from '@/services/prisma.service';
import * as CrudService from '@/services/crud.service';
import { RepositoryDto } from '@/types/common/io';
import { UserFindManyResponse } from '@/types/user/user-find-many.response';

export type UserRepository = {
  findMany: (
    dto: RepositoryDto<Prisma.UserFindManyArgs>,
  ) => Promise<ResultAsync<UserFindManyResponse, Error>>;
  findOne: (
    dto: RepositoryDto<Prisma.UserFindUniqueArgs>,
  ) => Promise<ResultAsync<User, Error>>;
  create: (
    dto: RepositoryDto<Prisma.UserCreateArgs>,
  ) => Promise<ResultAsync<User, Error>>;
  update: (
    dto: RepositoryDto<Prisma.UserUpdateArgs>,
  ) => Promise<ResultAsync<User, Error>>;
};

export const mapFieldsSelected = (
  args: CrudService.FieldsRequested,
): Prisma.UserSelect => {
  const { mainFields } = args;

  const invitedByUser: Prisma.UserSelect['invitedByUser'] = args?.invitedByUser
    ? {
        select: mapFieldsSelected(args.invitedByUser),
      }
    : false;
  return {
    id: mainFields.includes('id' as keyof User),
    createdAt: mainFields.includes('createdAt' as keyof User),
    updatedAt: mainFields.includes('updatedAt' as keyof User),
    archived: mainFields.includes('archived' as keyof User),
    archivedAt: mainFields.includes('archivedAt' as keyof User),

    // scalar fields
    email: mainFields.includes('email' as keyof User),
    firstName: mainFields.includes('firstName' as keyof User),
    lastName: mainFields.includes('lastName' as keyof User),

    // relations
    invitedByUserId: mainFields.includes('invitedByUserId' as keyof User),
    invitedByUser,
    // usersInvited
    // accountsOfThisUser
  };
};

export const findMany: UserRepository['findMany'] = async (
  dto: RepositoryDto<Prisma.UserFindManyArgs>,
): Promise<ResultAsync<UserFindManyResponse, Error>> => {
  const { args } = dto;

  // construct prisma field selectiom
  const select = mapFieldsSelected(dto?.fields)

  const result = await fromPromise(
    prismaReadService.user.findMany({
      ...args,
      select,
    }),
    (e) => e,
  );
  if (result.isErr()) {
    return err(new Error(`DB_ERROR`));
  }

  const response: UserFindManyResponse = {
    items: result.value as unknown as User[],
  };

  return ok<UserFindManyResponse>(response);
};

export const findOne: UserRepository['findOne'] = async (
  dto: RepositoryDto<Prisma.UserFindUniqueArgs>,
): Promise<ResultAsync<User, Error>> => {
  const { args } = dto;

  // construct prisma field selectiom
  const select = mapFieldsSelected(dto?.fields)

  const result = await fromPromise(
    prismaReadService.user.findUnique({
      ...args,
      select,
    }),
    (e) => e,
  );
  if (result.isErr()) {
    return err(new Error(`DB_ERROR`));
  }

  return ok<User>(result.value as User);
};

export const create: UserRepository['create'] = async (
  dto: RepositoryDto<Prisma.UserCreateArgs>,
): Promise<ResultAsync<User, Error>> => {
  const { args } = dto;

  // construct prisma field selectiom
  const select = mapFieldsSelected(dto?.fields)

  const result = await fromPromise(
    prismaWriteService.user.create({
      ...args,
      select,
    }),
    (e) => e,
  );
  if (result.isErr()) {
    return err(new Error(`DB_ERROR`));
  }

  return ok<User>(result.value as User);
};

export const update: UserRepository['update'] = async (
  dto: RepositoryDto<Prisma.UserUpdateArgs>,
): Promise<ResultAsync<User, Error>> => {
  const { args } = dto;

  // construct prisma field selectiom
  const select = mapFieldsSelected(dto?.fields)

  const result = await fromPromise(
    prismaWriteService.user.update({
      ...args,
      select,
    }),
    (e) => e,
  );
  if (result.isErr()) {
    return err(new Error(`DB_ERROR`));
  }

  return ok<User>(result.value as User);
};
