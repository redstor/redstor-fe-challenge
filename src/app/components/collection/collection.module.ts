import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CollectionComponent } from './collection.component';
import { MatIconModule } from '@angular/material/icon';
import { BreadcrumbModule } from '../breadcrumb';

@NgModule({
  declarations: [CollectionComponent],
  imports: [
    BreadcrumbModule,
    CommonModule,
    RouterModule.forChild([{path:'', component: CollectionComponent}]),
    MatToolbarModule,
    MatProgressBarModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [CollectionComponent]
})
export class CollectionModule {}
