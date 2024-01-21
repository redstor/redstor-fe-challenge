import { Component, OnInit, inject, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ICollection } from '@app/interfaces';
import { UnsplashService } from '@app/services';
import { environment } from '@environments/environment';
import { debounceTime, Subject } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';


@Component({
  standalone: true,

  imports: [CommonModule, RouterModule, MatToolbarModule, MatProgressBarModule, MatCardModule, MatIconModule],

  selector: 'app-home',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy {
  readonly unsplashService: UnsplashService = inject(UnsplashService);
  private pageSubject: Subject<number> = new Subject()
  private listSubscription: Subscription = new Subscription();
  isLoading: boolean = false;
  page: number = 1
  collections: ICollection[] = [];
  constructor(private changeDetectors: ChangeDetectorRef) { }
  ngOnInit(): void {
    // toDo Improve this call using the store (ngrx)

    this.isLoading = true;


    this.pageSubject.pipe(debounceTime(100)).subscribe((newPage: number) => {
      this.page = newPage;
      this.getData();
    });
    this.getData()
  }

  onPageChange = (page: number) => {
    this.pageSubject.next(page)
  }

  private getData = () => {

    this.listSubscription = this.unsplashService.listCollections(this.page).subscribe(collections => {
      this.collections = collections?.response?.results || [];
      this.isLoading = false;
      this.changeDetectors.markForCheck()
    });

  }
  ngOnDestroy(): void {
    this.listSubscription.unsubscribe()
  }
}
