import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {  TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    TranslateModule.forChild(),
  ],
  exports: [
    HeaderComponent
  ],
})
export class SharedModule {}
