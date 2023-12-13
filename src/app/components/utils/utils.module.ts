import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TitleComponent } from './title/title.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'app/app.module';

@NgModule({
  declarations: [TitleComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,    
    MatIconModule,
    HttpClientModule,
    TranslateModule.forChild(),
  ],
  exports: [TitleComponent]
})
export class UtilsModule {}
