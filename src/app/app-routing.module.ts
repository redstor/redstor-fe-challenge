import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, CollectionComponent, PhotoComponent } from './components';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
   },
  {
    path: 'collection/:collectionId',
    loadChildren: () => import('./components/collection/collection.module').then(m => m.CollectionModule)
  },
  {
    path: 'collection/:collectionId/photo/:photoId',
    loadChildren: () => import('./components/photo/photo.module').then(m => m.PhotoModule)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
