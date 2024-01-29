import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPhoto } from '@app/interfaces';
import { PhotoActions } from '@app/store';
import { PhotoSelectors } from '@app/store/photo/photo.selectors';
import { Store } from '@ngrx/store';
import { Subject, map, takeUntil } from 'rxjs';

// toDo Is there a way to improve the rendering strategy in this component?
@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit, OnDestroy {
  private readonly router: Router = inject(Router);
  private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private destroy$ = new Subject<void>();

  photo$ = signal({} as IPhoto);
  isLoading$ = signal(true);
  photoId = this.activatedRoute.snapshot.params['photoId'];

  constructor(private store: Store) {
    this.store.dispatch(PhotoActions.loadPhoto(this.photoId));
  }

  ngOnInit(): void {
    // toDo Is there a better way to improve this object mapping?
    this.store
      .select(PhotoSelectors.selectPhoto)
      .pipe(
        takeUntil(this.destroy$),
        map(photo => {
          this.photo$.set(photo);
          this.isLoading$.set(false);
        })
      )
      .subscribe();
  }

  handleGotoCollection() {
    const collectionId = this.activatedRoute.snapshot.params['collectionId'];
    return this.router.navigate(['collection', collectionId]);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
