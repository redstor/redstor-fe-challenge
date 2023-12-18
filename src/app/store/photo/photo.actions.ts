import { createAction, props } from '@ngrx/store';
import { IPhoto } from '@app/interfaces';

export const loadPhoto = createAction('[Photo] Load Photo', props<{ photoId: string }>());
export const loadPhotoSuccess = createAction('[Photo] Load Photo Success', props<{ photo: IPhoto }>());
export const loadPhotoFailure = createAction('[Photo] Load Photo Failure', props<{ error: any }>());
