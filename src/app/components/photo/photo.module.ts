import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoComponent } from './photo.component';
import { SharedModule } from '@app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
const routes: Routes = [
  {
    path: ':collectionId/photo/:photoId',
    component: PhotoComponent,
  }
]
@NgModule({
  declarations: [PhotoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatToolbarModule, 
    MatProgressBarModule, 
    MatCardModule, 
    MatIconModule,
    SharedModule,
    TranslateModule.forChild({}),
  ],
  exports: [PhotoComponent]
})
export class PhotoModule {}
