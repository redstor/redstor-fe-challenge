import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// toDo How could we improve this routing?
/*
 Solution: 
      Considering the fact that each components we have here is setup in form of a module Lazy loading is a great way to 
      improve the codes we have below and for performance of our application by only loading modules when they are needed. 
*/
const routes: Routes = [
  { 
    path: '', 
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
  },
  { 
    path: 'collection', 
    loadChildren: () => import('./components/collection/collection.module').then(m => m.CollectionModule)
  },
  { 
    path: 'collection', 
    loadChildren: () => import('./components/photo/photo.module').then(m => m.PhotoModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
