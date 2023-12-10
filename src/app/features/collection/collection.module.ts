import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CollectionComponent } from './collection.component';
import { MatIconModule } from '@angular/material/icon';
import { CollectionRoutingModule } from './collection-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [CollectionComponent],
  imports: [
    CommonModule,
    CollectionRoutingModule,
    MatProgressBarModule,
    MatCardModule,
    MatIconModule,
    TranslateModule.forChild({}),
  ]
})
export class CollectionModule {}
