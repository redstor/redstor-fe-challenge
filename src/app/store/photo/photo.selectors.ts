import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPhoto from './photo.reducer';

export const selectPhotoState = createFeatureSelector<fromPhoto.PhotoState>('photo');

export const selectPhoto = createSelector(selectPhotoState, state => state.photo);
export const selectPhotoLoading = createSelector(selectPhotoState, state => state.isLoading);
