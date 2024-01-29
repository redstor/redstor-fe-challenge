import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ICollection } from '@app/interfaces';
import { IPagination } from '@app/interfaces/pagination.interface';
import { UnsplashService } from '@app/services';
import { CollectionsActions, CollectionsSelectors } from '@app/store';
import { PaginationAction, PaginationSelector } from '@app/store/pagination';
import { Store } from '@ngrx/store';
import { Subject, map, takeUntil } from 'rxjs';

// toDo Transform this module in a standalone component
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
  readonly unsplashService: UnsplashService = inject(UnsplashService);

  // toDo Why the changes are not reflected in the UI?
  /**
   * Alan: The propertie was declareted in component notation,
   * modify the way  the check changes happend by default in Angular.
   * changeDetection: ChangeDetectionStrategy.OnPush
   */
  isLoading: boolean = false;
  collections: ICollection[] = [];
  pagination = {} as IPagination;
  private destroy$ = new Subject<void>();

  constructor(private store: Store) {}
  ngOnInit(): void {
    // toDo Improve this call using the store (ngrx)
    this.loadCollections();

    // toDo What's happening with this subscription in case the component is destroyed?
    /**
     * We created a observable subscription, which will keep watching
     * this one until the subscription is destroyed
     */
    // toDo Is there another way to do this operation?
    this.store
      .select(CollectionsSelectors.selectCollections)
      .pipe(
        takeUntil(this.destroy$),
        map(collections => (this.collections = collections))
      )
      .subscribe();

    // toDo Could we add a pagination?
    this.store
      .select(PaginationSelector.selectPagination)
      .pipe(takeUntil(this.destroy$))
      .subscribe(pagination => (this.pagination = pagination));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadCollections() {
    try {
      this.isLoading = true;
      this.store.dispatch(CollectionsActions.loadCollections({}));
      this.store
        .select(CollectionsSelectors.selectCollections)
        .pipe(
          takeUntil(this.destroy$),
          map(collections => (this.collections = collections))
        )
        .subscribe();
    } catch (error) {
      console.log(error);
    } finally {
      this.isLoading = false;
    }
  }

  getServerData($event: PageEvent) {
    this.isLoading = true;
    try {
      let pagination: IPagination = {
        currentPage: $event.pageIndex + 1,
        itemPerPage: $event.pageSize,
      };
      this.store.dispatch(PaginationAction.setPagination(pagination));
      this.store.dispatch(CollectionsActions.loadCollections({ page: pagination.currentPage, perPage: pagination.itemPerPage }));
    } catch (error) {
      console.log(error);
    } finally {
      this.isLoading = false;
      return $event;
    }
  }
}
