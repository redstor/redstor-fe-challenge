import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CollectionsEffects, metaReducers, reducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '@environments/environment';
import { ToolbarModule } from './layouts/toolbar';
import { loadingReducers } from './store/loading';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpLoaderFactory, translateFactory } from './app.translate';

@NgModule({
  declarations: [AppComponent],
  imports: [
    MatProgressBarModule,
    ToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

    // Store
    // toDo Is there a way to load the store just for the module or component in use?
    StoreModule.forRoot({...loadingReducers, ...reducers}, { metaReducers}),
    EffectsModule.forRoot([CollectionsEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [
    translateFactory
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
