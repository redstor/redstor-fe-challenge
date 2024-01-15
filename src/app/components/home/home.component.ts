import { Component, OnInit, inject, ChangeDetectionStrategy, ChangeDetectorRef, HostListener  } from '@angular/core';
import { ICollection } from '@app/interfaces';
import { UnsplashService } from '@app/services';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { CollectionsFacade } from '../../store/collections/collections.facade';

// toDo Transform this module in a standalone component
/* Solution: 
    Additional parameter is added which declare the component as a standalone component.
    by add standalone directive
*/
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatProgressBarModule, 
    MatCardModule,
    RouterLink,
    SharedModule,
    MatPaginatorModule,
  ],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  readonly unsplashService: UnsplashService = inject(UnsplashService);
  readonly collectionsFacade: CollectionsFacade = inject(CollectionsFacade);
  isLoading: boolean = false;
  collections: ICollection[] = [];
  page: number = 1;
  perPage: number = 26;
  totalItems: number | undefined;


  // toDo Why the changes are not reflected in the UI?
  /*
  Answer: 

  The onPush strategy is used specifically in this component which automatically
  push an halt to angular default change detection mechanism but we can then use 
  a manual approach to trigger the change detection.

  which we would have to add below
  
  */
  constructor(
    private cdr: ChangeDetectorRef, 
    ) { }


  ngOnInit(): void {


    // toDo What's happening with this subscription in case the component is destroyed?
   

    // toDo Improve this call using the store (ngrx)
    /* 
        Solution: Based on the todo immediately above this comment, instead of calling the unplashservice 
        directly inside this component the code is been refactored to get data using the ngrx approach.
    */
    this.getCollections();
     // toDo Is there another way to do this operation?
    /* 
        Solution: Instead of writing the whole inside the cycle hook ngOnInit had to compress it into a
        method and call it, which makes our operation more cleaner and our code understandable
    */
  }


  // Function to get list of collection
  getCollections() {
    this.collectionsFacade.loadCollections(this.page, this.perPage);
    this.cdr.markForCheck();
  }
    // toDo Could we add a pagination?
  /* Method to trigger a new page to get new sets of data */
  // @HostListener('window:scroll', ['$event'])
  getPageEvent(e: PageEvent) {
    console.log('page', e);
    this.perPage = e.pageSize;
    this.page = e.pageIndex;
    // call get collection method
    this.getCollections();
  }


  getGridRow(index: number): string {
    const rowIndex = index % 3; // You can adjust this based on your design
    return `span ${rowIndex + 1}`;
  }
}
