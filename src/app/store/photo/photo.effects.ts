import { Injectable, inject } from '@angular/core';
import { IPhoto } from '@app/interfaces';
import { UnsplashService } from '@app/services';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { PhotoActions } from './photo.actions';

@Injectable()
export class PhotoEffects {
  private readonly actions$: Actions = inject(Actions);
  private readonly unsplash: UnsplashService = inject(UnsplashService);

  loadPhoto$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PhotoActions.loadPhoto),
      switchMap(value =>
        this.unsplash
          .getPhoto(value.id)
          .pipe(
            map(result =>
              result.type === 'success'
                ? PhotoActions.loadPhotoSuccess((result.response as unknown as IPhoto))
                : PhotoActions.loadPhotoFailure()
            )
          )
      )
    )
  );
}
