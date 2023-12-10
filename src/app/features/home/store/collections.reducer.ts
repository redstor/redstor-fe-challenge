import { ICollection } from '@app/interfaces';
import { createReducer, on } from '@ngrx/store';
import { CollectionsActions } from './collections.actions';

export const collectionsFeatureKey = 'collections';

export interface State {
  collections: ICollection[];
  total: number;
  loading: boolean;
}

export const initialState: State = {
  collections: [],
  total: 0,
  loading: false,
};

export const collectionsReducer = createReducer(
  initialState,
  on(CollectionsActions.loadCollections, (state) => ({ ...state, loading: true })),
  on(CollectionsActions.loadCollectionsSuccess, (state, { collections, total }) => ({ ...state, collections, total, loading: false }))
);
