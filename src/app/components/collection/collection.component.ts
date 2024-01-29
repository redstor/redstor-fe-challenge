import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPhoto } from '@app/interfaces';
import { UnsplashService } from '@app/services';
import { BehaviorSubject, Subject, map, takeUntil } from 'rxjs';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectionComponent implements OnInit, OnDestroy {
  private readonly unsplashService: UnsplashService = inject(UnsplashService);
  private readonly router: Router = inject(Router);
  private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  photos$ = signal([] as IPhoto[]);

  // toDo Is there another way using new Angular features to replace rjxs
  isLoading$ = signal(false);
  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.isLoading$.set(true);
    const collectionId = this.activatedRoute.snapshot.params['collectionId'];

    this.unsplashService.listCollectionPhotos(collectionId).pipe(
      takeUntil(this.destroy$),
      map(photos => {
        this.photos$.set(photos?.response?.results || []);
        this.isLoading$.set(false);
    })).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  handleGotoPhoto(photo: IPhoto) {
    const collectionId = this.activatedRoute.snapshot.params['collectionId'];
    return this.router.navigate(['collection', collectionId, 'photo', photo.id]);
  }
}
