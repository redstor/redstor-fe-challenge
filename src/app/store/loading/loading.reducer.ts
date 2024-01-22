import { createReducer, on } from '@ngrx/store';
import { LoadingActions } from './loading.actions';

export const loadingFeatureKey = 'loading';

export interface State {
  loading: boolean;
}

export const initialState: State = {
  loading: false
};

export const reducer = createReducer(
  initialState,
  on(
    LoadingActions.showLoading,
    (state) => ({ ...state, loading: true })
  ),
  on(
    LoadingActions.hideLoading,
    (state) => ({ ...state, loading: false })
  ),
);
