import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { IPhoto } from '@app/interfaces';
import { UnsplashService } from '@app/services';

interface Breadcrumb {
  label: string;
  link?: string;
}

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectionComponent implements OnInit {
  readonly photos$: BehaviorSubject<IPhoto[]> = new BehaviorSubject<IPhoto[]>([]);
  readonly isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  readonly breadcrumbs: Breadcrumb[] = [{ label: 'Collections' }, { label: 'Collection' }];

  constructor(
    private readonly unsplashService: UnsplashService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.isLoading$.next(true);
    const collectionId = this.activatedRoute.snapshot.params['collectionId'];

    this.unsplashService.listCollectionPhotos(collectionId).subscribe(photos => {
      this.photos$.next(photos?.response?.results || []);
      this.isLoading$.next(false);
    });
  }

  handleGotoPhoto(photo: IPhoto) {
    const collectionId = this.activatedRoute.snapshot.params['collectionId'];
    return this.router.navigate(['collection', collectionId, 'photo', photo.id]);
  }
}
