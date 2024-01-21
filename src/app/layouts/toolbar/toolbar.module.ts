import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar.component';

const MaterialModules = [MatToolbarModule];

@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    ...MaterialModules
  ],
  exports: [
    ...MaterialModules,
    ToolbarComponent
  ]
})
export class ToolbarModule {}
