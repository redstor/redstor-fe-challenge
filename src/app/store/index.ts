export * from './collections';
export * from './photo';

import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '@environments/environment';
import { fromPhoto } from './photo';
import { fromCollections } from './collections';
import { fromPagination } from './pagination';

export interface State {
  photo: fromPhoto.State;
  collections: fromCollections.State;
  pagination: fromPagination.State;
}

export const reducers: ActionReducerMap<State> = {
  collections: fromCollections.reducer,
  photo: fromPhoto.reducer,
  pagination: fromPagination.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
