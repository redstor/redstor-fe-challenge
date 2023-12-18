import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCollections from './collections.reducer';

export namespace CollectionsSelectors {
  export const selectCollectionsFeature = createFeatureSelector<fromCollections.State>(fromCollections.collectionsFeatureKey);
  export const selectCollections = createSelector(selectCollectionsFeature, (state: fromCollections.State) => state.collections);
}

export const selectCollectionState = createFeatureSelector<fromCollections.CollectionState>('collection');

export const selectCollectionPhotos = createSelector(selectCollectionState, state => state.photos);

export const selectCollectionLoading = createSelector(selectCollectionState, state => state.isLoading);
