import { ResolveTree, parseResolveInfo } from 'graphql-parse-resolve-info';
import * as CrudService from '@/services/crud.service';
import { User } from '@/models/user';
import { Account } from '@/models/account';
import { Transaction } from '@/models/transaction';
import { GraphQLResolveInfo, __Field } from 'graphql';

export const mapNodeWithPluralNameToSingularEntityName = (
  args: string,
): string => {
  if (args === 'invitedByUser') return User.name;
  if (args === 'usersInvited') return User.name;
  if (args === 'accountsOfThisUser') return Account.name;

  // ===== Account =====
  if (args === 'user') return User.name;
  if (args === 'transactionsMadeFromThisAccount') return Transaction.name;
  if (args === 'transactionsMadeToThisAccount') return Transaction.name;

  // ===== Transaction =====
  if (args === 'fromAccount') return Account.name;
  if (args === 'toAccount') return Account.name;

  return args;
};

export type ExtractFieldArgs = {
  resolveTree: ResolveTree;
  entityName: CrudService.EntityName;
};
export const extractfields = (args: ExtractFieldArgs) => {
  const { resolveTree, entityName } = args;
  const entityFields: CrudService.FieldsRequested = { mainFields: [] };
  if (!resolveTree.fieldsByTypeName?.[entityName]) {
    return entityFields;
  }

  const fieldsRequested = Object.keys(
    resolveTree.fieldsByTypeName[entityName] as {},
  );

  for (const field of fieldsRequested) {
    const _field = field as CrudService.RelationField;

    if (CrudService.relationalFields.includes(_field)) {
      if (resolveTree?.fieldsByTypeName) {
        if (resolveTree?.fieldsByTypeName[entityName]) {
          const fieldsFromGraphqlInfo =
            resolveTree?.fieldsByTypeName[entityName];
          if (fieldsFromGraphqlInfo) {
            const nestedResolveTree = fieldsFromGraphqlInfo[
              _field
            ] as ResolveTree;

            const nestedFields = extractfields({
              resolveTree: nestedResolveTree,
              entityName: mapNodeWithPluralNameToSingularEntityName(
                _field,
              ) as CrudService.EntityName,
            });

            if (nestedFields && Object.keys(nestedFields)?.length > 0) {
              entityFields[_field] = nestedFields;
            }
            continue;
          }
        }
      }
    }
  }
};

export type GetFieldsRequestedForFindMany = {
  info: GraphQLResolveInfo;
  responseType: string;
  rootEntityName: CrudService.EntityName;
};
export const getFieldsRequestedForFindMany = (
  args: GetFieldsRequestedForFindMany,
): CrudService.FieldsRequested => {
  const { info, responseType, rootEntityName } = args;

  const parsedResolveInfo = parseResolveInfo(info) as ResolveTree;

  const fieldsRequested: CrudService.FieldsRequested = {
    mainFields: [],
  };

  if (parsedResolveInfo) {
    if (parsedResolveInfo?.fieldsByTypeName[responseType]) {
      const fieldsFromGraphqlInfo =
        parsedResolveInfo?.fieldsByTypeName[responseType];
      if (fieldsFromGraphqlInfo) {
        const resolveTree = fieldsFromGraphqlInfo['items'] as ResolveTree;
        return extractfields({
          resolveTree,
          entityName: rootEntityName,
        }) as CrudService.FieldsRequested;
      }
    }
  }

  return fieldsRequested;
};
