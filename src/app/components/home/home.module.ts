import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedHeaderComponent } from '@app/shared-header/shared-header.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RouterModule, MatToolbarModule, MatProgressBarModule, MatCardModule, SharedHeaderComponent],
  exports: [HomeComponent]
})
export class HomeModule {}
