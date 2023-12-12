import { Component, OnInit, inject, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ICollection } from '@app/interfaces';
import { UnsplashService } from '@app/services';
import { Subscription } from 'rxjs';

// toDo Transform this module in a standalone component
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  collections: ICollection[] = [];
  isLoading: boolean = false;
  private subscriptions = new Subscription();
  constructor(private unsplashService: UnsplashService, private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    // toDo Improve this call using the store (ngrx)
    this.isLoading = true;

    // toDo What's happening with this subscription in case the component is destroyed?
    // toDo Is there another way to do this operation?
    // toDo Could we add a pagination?
    const subscription = this.unsplashService.listCollections().subscribe(collections => {
      this.collections = collections?.response?.results || [];
      this.isLoading = false;
      this.changeDetectorRef.markForCheck(); // Notify Angular to check updates
    });
    this.subscriptions.add(subscription);
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
