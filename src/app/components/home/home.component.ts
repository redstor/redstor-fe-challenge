import { Store, select } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ICollection } from '@app/interfaces';
import { UnsplashService } from '@app/services';
import { Subscription, Observable } from 'rxjs';
import { loadCollections } from '../collection/collection.actions';
import { AppState } from 'app-state';

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

  constructor(private unsplashService: UnsplashService, private changeDetectorRef: ChangeDetectorRef, private store: Store<AppState>) {}

  ngOnInit(): void {
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

    // Dispatch the action to load collections
    this.store.dispatch(loadCollections());

    // Select the collections from the store
    this.store.pipe(select(state => state.collections)).subscribe(collections => {
      this.collections = collections;
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
