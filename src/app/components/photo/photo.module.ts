import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PhotoComponent } from './photo.component';
import { SharedHeaderComponent } from '@app/shared-header/shared-header.component';
import { CardComponent } from 'projects/lib/src/lib/card/card.component';

@NgModule({
  declarations: [PhotoComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatCardModule,
    MatIconModule,
    SharedHeaderComponent,
    CardComponent
  ],
  exports: [PhotoComponent]
})
export class PhotoModule {}
