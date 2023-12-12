import { Action, createReducer, on } from '@ngrx/store';
import { IPhoto } from '@app/interfaces';
import * as PhotoActions from './photo.actions';

export interface PhotoState {
  photo: IPhoto | null;
  isLoading: boolean;
  error: any;
}

export const initialState: PhotoState = {
  photo: null,
  isLoading: false,
  error: null
};

const photoReducer = createReducer(
  initialState,
  on(PhotoActions.loadPhoto, state => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(PhotoActions.loadPhotoSuccess, (state, { photo }) => ({
    ...state,
    photo,
    isLoading: false
  })),
  on(PhotoActions.loadPhotoFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false
  }))
);

export function reducer(state: PhotoState | undefined, action: Action) {
  return photoReducer(state, action);
}
