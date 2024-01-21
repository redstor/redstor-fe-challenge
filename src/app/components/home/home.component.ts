import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { IBreadcrumb, ICollection } from '@app/interfaces';
import { UnsplashService } from '@app/services';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from '../breadcrumb';
import { RouterModule } from '@angular/router';

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

  // toDo Why the changes are not reflected in the UI?
  isLoading: boolean = false;
  collections: ICollection[] = [];

  breadcrumbs: IBreadcrumb[] = [
    {
      title: 'Collections',
      link: ''
    }
  ];

  ngOnInit(): void {
    // toDo Improve this call using the store (ngrx)
    this.isLoading = true;

    // toDo What's happening with this subscription in case the component is destroyed?
    // toDo Is there another way to do this operation?
    // toDo Could we add a pagination?
    this.unsplashService.listCollections().subscribe(collections => {
      this.collections = collections?.response?.results || [];
      this.isLoading = false;
    });
  }
}
