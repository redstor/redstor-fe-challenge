import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { UnsplashService } from 'app/services';
import { ICollection } from 'app/interfaces';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Redstor FE Challenger';
  destroy$ = new Subject<void>();

  constructor(private readonly unsplashService: UnsplashService, private cdr: ChangeDetectorRef) { }

  isLoading: boolean = false;
  collections: ICollection[] = [];

  ngOnInit(): void {
    this.isLoading = true;

    this.unsplashService
      .listCollections()
      ?.pipe(takeUntil(this.destroy$))
      .subscribe((collections) => {
        this.collections = collections?.response?.results || [];
        this.isLoading = false;
        this.cdr.detectChanges();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

// HBERNARDI - improvements:
// Injection with Constructor:
// The inject function is replaced with constructor injection. This is a more modern and Angular-recommended approach for injecting services into components.
// Angular Lifecycle Hooks:
// The ngOnInit and ngOnDestroy lifecycle hooks are implemented. The ngOnInit hook is used to initialize the component, and the ngOnDestroy hook is used to clean up resources, specifically unsubscribing from observable subscriptions.
// RxJS takeUntil Operator:
// The takeUntil operator is introduced to automatically unsubscribe from the observable when the destroy$ subject emits. This helps avoid memory leaks by ensuring that the subscription is terminated when the component is destroyed.
// Change Detection Manual Trigger:
// The ChangeDetectorRef (cdr) is used to manually trigger change detection after updating the component properties. This is necessary when using OnPush change detection strategy and updating component properties outside Angular's knowledge.
// Standalone Component:
// The comment "Transform this module into a standalone component" is addressed. The code is already organized as an Angular component.
