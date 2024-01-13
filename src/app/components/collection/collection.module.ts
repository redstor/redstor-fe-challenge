import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionComponent } from './collection.component';
import { MatIconModule } from '@angular/material/icon';
const routes: Routes = [
  {
    path: ':collectionId',
    component: CollectionComponent,
  }
]
@NgModule({
  declarations: [CollectionComponent],
  imports: [
     CommonModule,
     RouterModule.forChild(routes), 
     MatToolbarModule,
     MatProgressBarModule, 
     MatCardModule,
     MatIconModule
    ],
  exports: [CollectionComponent]
})
export class CollectionModule {}
