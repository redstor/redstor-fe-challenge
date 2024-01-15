import { ICollection } from '@app/interfaces';
import { createReducer, on } from '@ngrx/store';
import { CollectionsActions } from './collections.actions';

export const collectionsFeatureKey = 'collections';

export interface State {
  collections: ICollection[];
  loading: boolean;
  totalItems: number;
}

export const initialState: State = {
  collections: [],
  loading: false,
  totalItems: 0
};

export const reducer = createReducer(
  initialState,
  on(CollectionsActions.loadCollections, (state) => ({ ...state, loading: true })),
  on(CollectionsActions.loadCollectionsSuccess, (state, { collections, totalItems }) => ({ ...state, collections, totalItems, loading: false })),
  on(CollectionsActions.loadCollectionsFailure, (state) => ({ ...state, loading: false })),
);
