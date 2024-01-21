import { Component, OnInit, inject, ChangeDetectionStrategy, Signal } from '@angular/core';
import { IBreadcrumb, ICollection } from '@app/interfaces';
import { UnsplashService } from '@app/services';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from '../breadcrumb';
import { RouterModule } from '@angular/router';
import { Observable} from 'rxjs';
import { Store, select } from '@ngrx/store';
import { CollectionsFacade, State } from '../../store';
import { LoadingSelectors } from '../../store/loading/loading.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    RouterModule,
    BreadcrumbModule,
    CommonModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatCardModule
  ]
})
export class HomeComponent implements OnInit {
  readonly unsplashService: UnsplashService = inject(UnsplashService);

  collections$! : Signal<ICollection[]>;

  breadcrumbs: IBreadcrumb[] = [
    {
      title: 'Collections',
      link: ''
    }
  ];
  isLoading$!: Observable<boolean>;

  constructor(
    private store: Store<State>,
    private collectionsFacade : CollectionsFacade
  ) {}

  ngOnInit(): void {
    // toDo Could we add a pagination?

    this.isLoading$ = this.store.pipe(select(LoadingSelectors.selectLoading));
    this.collectionsFacade.loadCollections();
    this.collections$ = this.collectionsFacade.collections$;
  }
}
