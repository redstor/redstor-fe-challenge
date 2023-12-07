import { ICollection } from '@app/interfaces';
import { createReducer, on } from '@ngrx/store';
import { CollectionsActions } from './collections.actions';

export const collectionsFeatureKey = 'collections';

export interface State {
  collections: ICollection[];
}

export const initialState: State = {
  collections: []
};

export const collectionsReducer = createReducer(
  initialState,
  on(CollectionsActions.loadCollectionsSuccess, (state, { collections }) => ({ ...state, collections }))
);
