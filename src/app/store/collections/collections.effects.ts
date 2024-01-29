import { Injectable, inject } from '@angular/core';
import { UnsplashService } from '@app/services';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CollectionsActions } from './collections.actions';
import { map, mergeMap, of, switchMap, tap } from 'rxjs';
import { PaginationAction } from '../pagination';

@Injectable()
export class CollectionsEffects {
  private readonly actions$: Actions = inject(Actions);
  private readonly unsplash: UnsplashService = inject(UnsplashService);

  loadCollections$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CollectionsActions.loadCollections),
      switchMap(params =>
        this.unsplash
          .listCollections(params)
          .pipe(
            map(result =>
              result.type === 'success'
                ? CollectionsActions.loadCollectionsSuccess(result.response.results || [])
                : CollectionsActions.loadCollectionsFailure()
            )
          )
      )
    )
  );
}
