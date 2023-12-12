import { createAction, props } from '@ngrx/store';
import { ICollection } from '@app/interfaces';
import { IPhoto } from '@app/interfaces';

export const loadCollections = createAction('[Collection] Load Collections');
export const loadCollectionsSuccess = createAction('[Collection] Load Collections Success', props<{ collections: ICollection[] }>());
export const loadCollectionsFailure = createAction('[Collection] Load Collections Failure', props<{ error: any }>());

export const loadCollectionPhotos = createAction('[Collection] Load Collection Photos', props<{ collectionId: string }>());

export const collectionPhotosLoaded = createAction('[Collection] Collection Photos Loaded', props<{ photos: IPhoto[] }>());
