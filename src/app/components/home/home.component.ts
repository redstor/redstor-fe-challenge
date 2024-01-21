import { Component, OnInit, inject, ChangeDetectionStrategy, Signal } from '@angular/core';
import { IBreadcrumb, ICollection } from '@app/interfaces';
import { UnsplashService } from '@app/services';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from '../breadcrumb';
import { RouterModule } from '@angular/router';
import { CollectionsFacade, State } from '../../store';

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

  constructor(
    private collectionsFacade : CollectionsFacade
  ) {}

  ngOnInit(): void {
    // toDo Could we add a pagination?
    this.collectionsFacade.loadCollections();
    this.collections$ = this.collectionsFacade.collections$;
  }
}
