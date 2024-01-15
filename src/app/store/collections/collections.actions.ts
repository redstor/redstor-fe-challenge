import { ICollection } from '@app/interfaces';
import { createAction, props } from '@ngrx/store';

export namespace CollectionsActions {
  export const loadCollections = createAction('[Collections] Load Collections', props<{page: number, perPage: number} > ());
  export const loadCollectionsSuccess = createAction('[Collections] Load Collections success', props<{collections: ICollection[], totalItems: number} > ());
  export const loadCollectionsFailure = createAction('[Collections] Load Collections failure');
}
