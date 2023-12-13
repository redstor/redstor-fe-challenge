import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PhotoComponent } from './photo.component';
import { PhotoRoutingModule } from './photo-routing.module';
import { UtilsModule } from '../utils/utils.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [PhotoComponent],
  imports: [
    CommonModule,
    MatToolbarModule, 
    MatProgressBarModule, 
    MatCardModule, 
    MatIconModule, 
    RouterModule, 
    PhotoRoutingModule,
    UtilsModule,
    TranslateModule.forChild(),
  ],
  exports: [PhotoComponent]
})
export class PhotoModule {}
