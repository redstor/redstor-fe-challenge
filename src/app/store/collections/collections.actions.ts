import { ICollection } from '@app/interfaces';
import { ofType } from '@ngrx/effects';
import { createAction, emptyProps, props } from '@ngrx/store';

export namespace CollectionsActions {
  export const loadCollections = createAction('[Collections] Load Collections', props<{ perPage: number, page: number } | {}>());
  export const loadCollectionsSuccess = createAction('[Collections] Load Collections success', (collections: ICollection[]) => ({
    collections
  }));
  export const loadCollectionsFailure = createAction('[Collections] Load Collections failure');
}
