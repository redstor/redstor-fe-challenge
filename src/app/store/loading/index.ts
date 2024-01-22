export * from './loading.actions';
export * from './loading.reducer';
export * from './loading.selectors';

import { ActionReducerMap } from '@ngrx/store';
import * as fromLoading from './loading.reducer';

export interface State {
  loading: fromLoading.State;
}

export const loadingReducers: ActionReducerMap<State> = {
  loading: fromLoading.reducer
};
