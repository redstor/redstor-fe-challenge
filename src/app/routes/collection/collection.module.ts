import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CollectionComponent } from './collection.component';
import { MatIconModule } from '@angular/material/icon';
import { StoreModule } from '@ngrx/store';
import { collectionsFeatureKey, collectionsReducer } from './store/collections.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CollectionsEffects } from './store/collections.effects';
import { CollectionRoutingModule } from './collection-routing.module';

@NgModule({
  declarations: [CollectionComponent],
  imports: [
    CommonModule,
    CollectionRoutingModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatCardModule,
    MatIconModule,
    StoreModule.forFeature(collectionsFeatureKey, collectionsReducer),
    EffectsModule.forFeature([CollectionsEffects])
  ],
  exports: [CollectionComponent]
})
export class CollectionModule {}
