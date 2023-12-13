import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { UnsplashService } from 'app/services';
import { IPhoto } from 'app/interfaces';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollectionComponent implements OnInit {
  pageTitle: string = 'Redstor FE Challenger';
  photos$: Observable<IPhoto[]>; 
  readonly isLoading$: Observable<boolean>; 

  constructor(
    private readonly unsplashService: UnsplashService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {
    const collectionId = this.activatedRoute.snapshot.params['collectionId'];

    this.photos$ = this.unsplashService.listCollectionPhotos(collectionId)?.pipe(
      map((photos) => photos?.response?.results || [])
    );

    this.isLoading$ = this.photos$?.pipe(map((photos) => photos.length === 0));
  }

  ngOnInit(): void {
  }

  handleGotoPhoto(photo: IPhoto) {
    const collectionId = this.activatedRoute.snapshot.params['collectionId'];
    return this.router.navigate(['collection', collectionId, 'photo', photo.id]);
  }
}

// HBERNARDI - improvements:
// Observable Instead of BehaviorSubject:
// In the new code, Observable is used instead of BehaviorSubject for photos$ and isLoading$. This is a good practice as Observable is generally more suitable when dealing with async operations, and it can be easily subscribed to in the template.
// Constructor Initialization:
// The initialization logic is moved to the constructor, making the component more concise. This helps in keeping the component's lifecycle methods (ngOnInit) cleaner and focused on other tasks.
// Observable Transformation with pipe and map:
// The pipe and map operators are used to transform the photos$ Observable. This makes the code more readable and allows for a clear transformation of the data.
// Simplified isLoading$ Logic:
// The isLoading$ logic is simplified using the map operator. It now checks if the length of the photos array is 0 to determine whether it's loading or not.
// Removed Unused Imports:
// The inject import is removed from the new code since it was not being used in the component.