import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    component: HomeComponent,
  }
]
@NgModule({
  declarations: [HomeComponent],
  imports: [
     CommonModule,
     RouterModule.forChild(routes),
     MatToolbarModule,
     MatProgressBarModule, 
     MatCardModule
  ],
  exports: [HomeComponent]
})
export class HomeModule {}
