import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { IBreadcrumb, ICollection } from '@app/interfaces';
import { UnsplashService } from '@app/services';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from '../breadcrumb';
import { RouterModule } from '@angular/router';
import { Observable, finalize, map } from 'rxjs';

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

  collections$! : Observable<ICollection[]>;

  isLoading: boolean = false;

  breadcrumbs: IBreadcrumb[] = [
    {
      title: 'Collections',
      link: ''
    }
  ];

  ngOnInit(): void {
    // toDo Improve this call using the store (ngrx)
    this.isLoading = true;

    // toDo Could we add a pagination?
    this.collections$ = this.unsplashService.listCollections().pipe(
      map(collections => {
        return collections.response?.results ?? [];
      }),
      finalize(() => this.isLoading = false)
    );
  }
}
