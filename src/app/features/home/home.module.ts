import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { StoreModule } from '@ngrx/store';
import { CollectionsEffects, collectionsFeatureKey, collectionsReducer } from './store';
import { EffectsModule } from '@ngrx/effects';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [],
  imports: [
    HomeRoutingModule, 
    StoreModule.forFeature(collectionsFeatureKey, collectionsReducer),
    EffectsModule.forFeature([CollectionsEffects]),
  ]
})
export class HomeModule {}
