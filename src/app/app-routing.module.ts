import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, CollectionComponent, PhotoComponent } from './components';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'collection/:collectionId',
    component: CollectionComponent,
    children: [
      {
        path: 'photo/:photoId',
        component: PhotoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
