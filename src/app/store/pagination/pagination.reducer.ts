import { IPagination } from "@app/interfaces/pagination.interface";
import { createReducer, on } from "@ngrx/store";
import { PaginationAction } from "./pagination.actions";


export const paginationFeatureKey = 'pagination';

export interface State {
  pagination: IPagination;
}

export const initialState: State = {
  pagination: {
    currentPage: 1,
    itemPerPage: 30,
  }
};

export const reducer = createReducer(
  initialState,
  on(PaginationAction.setPagination, (state, { pagination }) => ({...state, pagination }))
);