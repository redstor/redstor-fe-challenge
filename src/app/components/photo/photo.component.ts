import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UnsplashService } from '@app/services';
import { BehaviorSubject } from 'rxjs';
import { IPhoto } from '@app/interfaces';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html'
})
export class PhotoComponent implements OnInit {
  readonly photo$: BehaviorSubject<IPhoto | null> = new BehaviorSubject<IPhoto | null>(null);
  readonly isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private unsplashService: UnsplashService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const photoId = this.activatedRoute.snapshot.params['photoId'];
    if (photoId) {
      this.isLoading$.next(true);
      this.unsplashService.getPhoto(photoId).subscribe(response => {
        this.photo$.next(response.response as unknown as IPhoto);
        this.isLoading$.next(false);
      });
    }
  }

  handleGotoCollection() {
    const collectionId = this.activatedRoute.snapshot.params['collectionId'];
    this.router.navigate(['collection', collectionId]);
  }
}
