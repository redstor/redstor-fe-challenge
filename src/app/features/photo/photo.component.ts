import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPhoto } from '@app/interfaces';
import { UnsplashService } from '@app/services';
import { BehaviorSubject, filter } from 'rxjs';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoComponent implements OnInit {
  private readonly unsplashService: UnsplashService = inject(UnsplashService);
  private readonly router: Router = inject(Router);
  private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  readonly photo$: BehaviorSubject<IPhoto | null> = new BehaviorSubject<IPhoto | null>(null);
  readonly isLoading$ = signal(false);

  ngOnInit(): void {
    this.isLoading$.set(true);
    const photoId = this.activatedRoute.snapshot.params['photoId'];

    this.unsplashService.getPhoto(photoId).pipe(filter(p => p !== null)).subscribe(photo => {
      // toDo Is there a better way to improve this object mapping?
      // unsplash.js returns a 'Full' type of response which, in its type, does not contain properties like 'views'´
      // even though the request on runtime to the unsplash API endpoint does return a json with those properties
      // if the unsplash.js was returning a proper type i'd add a custom mapper from 'Full' to 'IPhoto'.
      this.photo$.next(photo.response as unknown as IPhoto);
      this.isLoading$.set(false);
    });
  }

  handleGotoCollection() {
    const collectionId = this.activatedRoute.snapshot.params['collectionId'];
    return this.router.navigate(['collection', collectionId]);
  }
}
