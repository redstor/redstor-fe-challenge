import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPagination from './pagination.reducer';

export namespace PaginationSelector {
  export const selectPaginationFeature = createFeatureSelector<fromPagination.State>(fromPagination.paginationFeatureKey);
  export const selectPagination = createSelector(selectPaginationFeature, (state: fromPagination.State) => state.pagination);
}
