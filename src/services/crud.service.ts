import { Account } from '@/models/account';
import { Transaction } from '@/models/transaction';
import { User } from '@/models/user';

export const USER_RELATIONAL_FIELDS = [
  'invitedByUser',
  'usersInvited',
  'accountsOfThisUser',
] as Array<keyof User>;

export const ACCOUNT_RELATIONAL_FIELDS = [
  'user',
  'transactionsMadeFromThisAccount',
  'transactionsMadeToThisAccount',
] as Array<keyof Account>;

export const TRANSACTION_RELATIONAL_FIELDS = [
  'fromAccount',
  'toAccount',
] as Array<keyof Transaction>;

export const relationalFields = [
  ...USER_RELATIONAL_FIELDS,
  ...ACCOUNT_RELATIONAL_FIELDS,
  ...TRANSACTION_RELATIONAL_FIELDS,
  'items',
] as const;
export type RelationField = (typeof relationalFields)[number];

export type FieldsRequested = {
  mainFields: string[];
} & {
  [key in RelationField]?: FieldsRequested;
};

export const entityNames = [User.name, Account.name, Transaction.name] as const;
export type EntityName = (typeof entityNames)[number];
