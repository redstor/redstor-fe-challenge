import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLoading from './loading.reducer';

export namespace LoadingSelectors {
  const selectLoadingFeature = createFeatureSelector<fromLoading.State>(fromLoading.loadingFeatureKey);
  export const selectLoading = createSelector(selectLoadingFeature, (state: fromLoading.State) => state.loading);
}
