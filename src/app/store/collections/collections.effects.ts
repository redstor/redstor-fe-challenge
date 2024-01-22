import { Injectable, inject } from '@angular/core';
import { UnsplashService } from '@app/services';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CollectionsActions } from './collections.actions';
import { concat, concatMap, map, of } from 'rxjs';
import { LoadingActions } from '../loading/loading.actions';

@Injectable()
export class CollectionsEffects {
  private readonly actions$: Actions = inject(Actions);
  private readonly unsplash: UnsplashService = inject(UnsplashService);

  loadCollections$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CollectionsActions.loadCollections),
      concatMap(action => concat(
        of(LoadingActions.showLoading()),
        this.unsplash
          .listCollections()
          .pipe(
            map(result =>
              result.type === 'success'
                ? CollectionsActions.loadCollectionsSuccess(result.response.results || [])
                : CollectionsActions.loadCollectionsFailure()
            )
          ),
        of(LoadingActions.hideLoading())
      )
    )
  ))
}
