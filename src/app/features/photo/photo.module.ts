import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhotoComponent } from './photo.component';
import { PhotoRoutingModule } from './photo-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [PhotoComponent],
  imports: [CommonModule, PhotoRoutingModule, MatProgressBarModule, MatCardModule, MatIconModule, TranslateModule.forChild({})],
})
export class PhotoModule {}
