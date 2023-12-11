import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CollectionComponent } from './collection.component';
import { MatIconModule } from '@angular/material/icon';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CollectionsEffects, metaReducers, reducers } from '../../store';
import { CollectionRoutingModule } from './collection-routing.module';
import { UtilsModule } from '../utils/utils.module';

@NgModule({
  declarations: [CollectionComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatCardModule,
    MatIconModule,
    StoreModule.forFeature('collections', reducers, { metaReducers }),
    EffectsModule.forFeature([CollectionsEffects]),
    CollectionRoutingModule,
    RouterModule,
    UtilsModule,
  ],
  exports: [CollectionComponent]
})
export class CollectionModule { }
