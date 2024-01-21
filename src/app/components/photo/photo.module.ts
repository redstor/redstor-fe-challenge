import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PhotoComponent } from './photo.component';
import { BreadcrumbModule } from '../breadcrumb';
import { RSSentenceCasePipeModule } from '../../core/pipes/sentence-case/rs-sentence-case-pipe.module';

@NgModule({
  declarations: [PhotoComponent],
  imports: [
    RSSentenceCasePipeModule,
    BreadcrumbModule,
    CommonModule,
    RouterModule.forChild([{path:'', component: PhotoComponent}]),
    MatToolbarModule,
    MatProgressBarModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [PhotoComponent]
})
export class PhotoModule {}
