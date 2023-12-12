import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPhoto } from '@app/interfaces';
import { UnsplashService } from '@app/services';
import { BehaviorSubject, Subscription, Observable } from 'rxjs';
import { Full } from 'unsplash-js/dist/methods/photos/types';

import * as fromPhoto from '../../store/photo/photo.reducer';
import { Store } from '@ngrx/store';
import * as PhotoActions from '../../store/photo/photo.actions';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html'
})
export class PhotoComponent implements OnInit, OnDestroy {
  readonly photo$: BehaviorSubject<IPhoto | null> = new BehaviorSubject<IPhoto | null>(null);
  private subscription: Subscription | undefined;

  public isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoadingObservable$: Observable<boolean> = this.isLoading$.asObservable();

  constructor(
    private unsplashService: UnsplashService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store<fromPhoto.PhotoState>
  ) {
    const photoId = this.activatedRoute.snapshot.params['photoId'];

    this.store.dispatch(PhotoActions.loadPhoto({ photoId }));
  }

  ngOnInit(): void {
    const photoId = this.activatedRoute.snapshot.params['photoId'];

    this.unsplashService.startLoading();

    this.store.dispatch(PhotoActions.loadPhoto({ photoId }));

    this.subscription = this.unsplashService.getPhoto(photoId).subscribe(response => {
      const photo = this.transformToIPhoto(response.response);
      this.photo$.next(photo);

      this.unsplashService.stopLoading();
    });
  }

  ngOnDestroy(): void {}

  private transformToIPhoto(fullPhoto: Full | undefined): IPhoto | null {
    if (!fullPhoto) return null;

    const urls = {
      raw: '',
      full: '',
      regular: '',
      small: '',
      thumb: '',
      small_s3: ''
    };

    if (fullPhoto.urls) {
      urls.raw = fullPhoto.urls.raw || '';
      urls.full = fullPhoto.urls.full || '';
      urls.regular = fullPhoto.urls.regular || '';
      urls.small = fullPhoto.urls.small || '';
      urls.thumb = fullPhoto.urls.thumb || '';
    }

    // Transform Full to IPhoto
    return {
      ...fullPhoto,
      color: fullPhoto.color || '',
      description: fullPhoto.description || '',
      alt_description: fullPhoto.alt_description || '',
      urls,
      views: 0, // Assign a default value or use an appropriate value
      user: {
        ...fullPhoto.user,
        last_name: fullPhoto.user?.last_name || ''
      }
    };
  }

  handleGotoCollection() {
    const collectionId = this.activatedRoute.snapshot.params['collectionId'];
    this.router.navigate(['collection', collectionId]);
  }
}
