import { Injectable, inject } from '@angular/core';
import { IPagination } from '@app/interfaces/pagination.interface';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import { PaginationAction } from './pagination.actions';

@Injectable()
export class PaginationEffects {
  private readonly actions$: Actions = inject(Actions);

  setUpPagination = createEffect(() =>
    this.actions$.pipe(
      ofType(PaginationAction.setPagination),
      tap(result => PaginationAction.setPagination(result as {} as IPagination))
    )
  );  
}
