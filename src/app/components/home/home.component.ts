import { Store, select } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ICollection } from '@app/interfaces';
import { UnsplashService } from '@app/services';
import { Subscription, Observable } from 'rxjs';
import { loadCollections } from '../../store/collection/collection.actions';
import { AppState } from 'app-state';
import { TranslateService } from '@ngx-translate/core';
import { updateBreadcrumbs } from '../../store/breadcrumb/breadcrumb.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  collections: ICollection[] = [];
  isLoading: boolean = false;
  breadcrumbs: Array<{ label: string; link?: string }> = [{ label: 'Collections' }];
  private subscriptions = new Subscription();

  constructor(
    private unsplashService: UnsplashService,
    private changeDetectorRef: ChangeDetectorRef,
    private store: Store<AppState>,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;

    const subscription = this.unsplashService.listCollections().subscribe(collections => {
      this.collections = collections?.response?.results || [];
      this.isLoading = false;
      this.changeDetectorRef.markForCheck();
    });
    this.subscriptions.add(subscription);

    this.store.dispatch(loadCollections());

    this.store.pipe(select(state => state.collections)).subscribe(stateCollections => {
      this.collections = stateCollections;

      this.breadcrumbs = [{ label: 'Collections' }];
      if (this.collections.length > 0) {
        this.breadcrumbs = [{ label: this.translateService.instant('Collections') }];
      }

      this.store.dispatch(updateBreadcrumbs({ breadcrumbs: this.breadcrumbs }));
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
