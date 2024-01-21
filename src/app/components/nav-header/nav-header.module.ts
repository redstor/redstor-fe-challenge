import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { NavHeaderComponent } from './nav-header.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [NavHeaderComponent],
  imports: [
    CommonModule, MatToolbarModule
  ],
  exports:[NavHeaderComponent, RouterModule]
})
export class NavHeaderModule { }
