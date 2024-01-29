import { IPhoto } from '@app/interfaces';
import { createAction, props } from '@ngrx/store';

export namespace PhotoActions {
  export const loadPhoto = createAction('[Photo] Load Photo', (id: string) => ({id}));
  export const loadPhotoSuccess = createAction('[Photo] Load Photo success', (photo: IPhoto) => ({
    photo
  }));
  export const loadPhotoFailure = createAction('[Photo] Load Photo failure');
}
