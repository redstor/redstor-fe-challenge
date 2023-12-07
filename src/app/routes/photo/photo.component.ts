import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPhoto } from '@app/interfaces';
import { UnsplashService } from '@app/services';
import { BehaviorSubject, Observable, map } from 'rxjs';

// toDo Is there a way to improve the rendering strategy in this component?
@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html'
})
export class PhotoComponent implements OnInit {
  private readonly unsplashService: UnsplashService = inject(UnsplashService);
  private readonly router: Router = inject(Router);
  private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  readonly photo$: BehaviorSubject<IPhoto> = new BehaviorSubject<IPhoto>({} as IPhoto);
  readonly isLoading$: Observable<boolean> = this.photo$.pipe(map(p => !p));

  ngOnInit(): void {
    const photoId = this.activatedRoute.snapshot.params['photoId'];

    this.unsplashService.getPhoto(photoId).subscribe(photo => {
      // toDo Is there a better way to improve this object mapping?
      this.photo$.next(photo.response as unknown as IPhoto);
    });
  }

  handleGotoCollection() {
    const collectionId = this.activatedRoute.snapshot.params['collectionId'];
    return this.router.navigate(['collection', collectionId]);
  }
}
