import * as CrudService from '@/services/crud.service';

export type RepositoryDto<T> = {
  requestId: string;
  fields: CrudService.FieldsRequested;
  args: T;
};
