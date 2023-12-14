import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CollectionComponent } from './collection.component';
import { MatIconModule } from '@angular/material/icon';
import { StoreModule } from '@ngrx/store';
import { collectionReducer } from '../../store/collection/collection.reducer';
import { SharedHeaderComponent } from '@app/shared-header/shared-header.component';

@NgModule({
  declarations: [CollectionComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatCardModule,
    MatIconModule,
    StoreModule.forFeature('collections', collectionReducer),
    SharedHeaderComponent
  ],
  exports: [CollectionComponent]
})
export class CollectionModule {}
