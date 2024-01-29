import { IPagination } from '@app/interfaces/pagination.interface';
import { createAction } from '@ngrx/store';

export namespace PaginationAction {
  export const setPagination = createAction('[Pagination] Set Pagination', (pagination: IPagination) => ({ pagination }));
  export const setTotalPages = createAction('[Pagination] Set Pagination', (pages: number) => ({ pages }));
}
