import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPhoto from './photo.reducer';

export namespace PhotoSelectors {
  export const selectPhotoFeature = createFeatureSelector<fromPhoto.State>(fromPhoto.photoFeatureKey);
  export const selectPhoto = createSelector(selectPhotoFeature, (state: fromPhoto.State) => state.photo);
}
