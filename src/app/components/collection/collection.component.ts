import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { IBreadcrumb, IPhoto } from '@app/interfaces';
import { UnsplashService } from '@app/services';
import { Store } from '@ngrx/store';
import { LoadingActions, State } from '../../store/loading';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectionComponent implements OnInit {
  private readonly unsplashService: UnsplashService = inject(UnsplashService);
  private readonly router: Router = inject(Router);
  private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  readonly photos$: BehaviorSubject<IPhoto[]> = new BehaviorSubject<IPhoto[]>([]);
  readonly isLoading = signal(false);

  breadcrumbs: IBreadcrumb[] = [
    {
      title: 'Collections',
      link: '/'
    },
    {
      title: 'Collection',
      link: ''
    }
  ];

  constructor(
    private store: Store<State>,
  ) { }

  ngOnInit(): void {
    this.isLoading.set(true);
    const collectionId = this.activatedRoute.snapshot.params['collectionId'];

    this.store.dispatch(LoadingActions.showLoading());

    this.unsplashService.listCollectionPhotos(collectionId).subscribe(photos => {
      this.photos$.next(photos?.response?.results || []);
      this.store.dispatch(LoadingActions.hideLoading());
    });
  }

  handleGotoPhoto(photo: IPhoto) {
    const collectionId = this.activatedRoute.snapshot.params['collectionId'];
    return this.router.navigate(['collection', collectionId, 'photo', photo.id]);
  }
}
