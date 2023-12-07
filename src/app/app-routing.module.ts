import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '',
    loadChildren: () => import('./routes/home/home.module').then(m => m.HomeModule)
  },
  { 
    path: 'collection', 
    loadChildren: () => import('./routes/collection/collection.module').then(m => m.CollectionModule)
  },
  { 
    path: 'collection/:collectionId/photo',
    loadChildren: () => import('./routes/photo/photo.module').then(m => m.PhotoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
