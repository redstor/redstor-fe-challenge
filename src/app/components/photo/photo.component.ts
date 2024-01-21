import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBreadcrumb, IPhoto } from '@app/interfaces';
import { UnsplashService } from '@app/services';
import { BehaviorSubject, Observable, finalize, map } from 'rxjs';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoComponent implements OnInit {
  private readonly unsplashService: UnsplashService = inject(UnsplashService);
  private readonly router: Router = inject(Router);
  private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  photo$!: Observable<IPhoto>;
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  breadcrumbs: IBreadcrumb[] = [
    {
      title: 'Collections',
      link: '/'
    },
    {
      title: 'Collection',
      link: `/collection/${this.activatedRoute.snapshot.params['collectionId']}`
    },
    {
      title: 'Photo',
      link: ''
    }
  ];

    ngOnInit(): void {
      const photoId = this.activatedRoute.snapshot.params['photoId'];

      this.isLoading$.next(true);

      this.photo$ = this.unsplashService.getPhoto(photoId).pipe(
        map(photo => {
          return photo.response as IPhoto & typeof photo.response;
        }),
        finalize(() => {
          this.isLoading$.next(false);
        })
      );
    }
  }
