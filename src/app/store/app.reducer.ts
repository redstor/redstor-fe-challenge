import { StoreModule } from '@ngrx/store';
import { reducer } from './collections';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '@app/app.component';

@NgModule({
  declarations: [],
  imports: [BrowserModule, StoreModule.forRoot({ collections: reducer })],
  bootstrap: [AppComponent]
})
export class AppModule {}
