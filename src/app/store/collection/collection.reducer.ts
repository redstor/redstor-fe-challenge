import { createReducer, on } from '@ngrx/store';
import { loadCollectionPhotos, collectionPhotosLoaded, loadCollectionsSuccess } from './collection.actions';
import { IPhoto } from '@app/interfaces';
import { AppState } from 'app-state';

const initialState: AppState = {
  collections: [],
  photos: []
};

export const collectionReducer = createReducer(
  initialState,
  on(loadCollectionsSuccess, (state, { collections }) => ({
    ...state,
    collections
  })),
  on(collectionPhotosLoaded, (state, { photos }) => ({ ...state, photos }))
);

export interface CollectionState {
  photos: IPhoto[];
}
