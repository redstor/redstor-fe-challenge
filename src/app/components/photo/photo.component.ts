import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPhoto } from 'app/interfaces';
import { UnsplashService } from 'app/services';
import { BehaviorSubject, Observable, catchError, map, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
})
export class PhotoComponent implements OnInit {
  pageTitle: string = 'Redstor FE Challenger';

  readonly photo$: BehaviorSubject<IPhoto> = new BehaviorSubject<IPhoto>({} as IPhoto);
  readonly isLoading$: Observable<boolean> = this.photo$.pipe(
    map((photo) => !photo),
    catchError((error) => {
      console.error('Error fetching photo:', error);
      return of(false);
    })
  );

  constructor(
    private readonly unsplashService: UnsplashService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      ?.pipe(
        switchMap((params) => {
          const photoId = params['photoId'];
          return this.unsplashService.getPhoto(photoId);
        })
      )
      .subscribe({
        next: (photo) => {
          if (photo) {
            this.photo$.next(photo.response as unknown as IPhoto);
          } else {
            console.error('Invalid photo response:', photo);
          }
        },
        error: (error) => {
          console.error('Error fetching photo:', error);
        },
      });
  }

  handleGotoCollection() {
    const collectionId = this.activatedRoute.snapshot.params['collectionId'];

    if (collectionId) {
      this.router.navigate(['collection', collectionId]).catch((error) => {
        console.error('Navigation to collection failed:', error);
      });
    } else {
      console.error('Invalid collectionId:', collectionId);
    }
  }

  capitalizeDescription(description: string | undefined): string {
    if (!description) {
      return '';
    }
    return description.charAt(0).toUpperCase() + description.slice(1);
  }
}

// HBERNARDI - improvements:
// Dependency Injection in Constructor:
// The use of the inject function is replaced with constructor injection. This is a more modern and Angular-recommended approach for injecting services into components.
// Error Handling with catchError:
// The catchError operator is introduced to handle errors in the observable chain. This ensures that errors are caught and handled gracefully, preventing them from propagating further. The error messages are also logged to the console.
// Observable Chain Optimization with switchMap:
// The use of switchMap in the observable chain simplifies the handling of route parameters. This operator allows for a more concise and readable way to switch from one observable to another, in this case, switching from the route parameters observable to the getPhoto observable.
// Improved Object Mapping:
// The object mapping in the subscribe block is improved. The next block now checks if the photo object is valid before updating the photo$ observable. Additionally, an error message is logged if the response is invalid.
// Navigation Handling:
// Navigation handling is improved in the handleGotoCollection method. It now checks if the collectionId is valid before attempting navigation, and any errors during navigation are logged.
// Description Capitalization Function:
// The capitalizeDescription function is introduced to capitalize the first letter of the photo description. This function enhances readability and provides a more organized way to handle this operation.
