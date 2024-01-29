import { IPhoto } from '@app/interfaces';
import { createReducer, on } from '@ngrx/store';
import { PhotoActions } from './photo.actions';

export const photoFeatureKey = 'photo';

export interface State {
  photo: IPhoto;
}

export const initialState: State = {
  photo: {} as IPhoto
};

export const reducer = createReducer(
  initialState,
  on(PhotoActions.loadPhotoSuccess, (state, { photo }) => ({ ...state, photo }))
);
