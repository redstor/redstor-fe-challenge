import { ICollection, IPhoto } from '@app/interfaces';
import { createReducer, on } from '@ngrx/store';
import { CollectionsActions } from './collections.actions';

export const collectionsFeatureKey = 'collections';

export interface State {
  collections: ICollection[];
}

export interface CollectionState {
  photos: IPhoto[];
  isLoading: boolean;
}

export const initialState: State = {
  collections: []
};

export const reducer = createReducer(
  initialState,
  on(CollectionsActions.loadCollectionsSuccess, (state, { collections }) => ({ ...state, collections }))
);
