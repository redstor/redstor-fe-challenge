import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { UtilsModule } from '../utils/utils.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, 
    MatToolbarModule, 
    MatProgressBarModule, 
    MatCardModule,
    MatPaginatorModule,
    UtilsModule,
    HomeRoutingModule, 
    RouterModule,
    TranslateModule.forChild(), 
  ],
  exports: [HomeComponent]
})
export class HomeModule {}

