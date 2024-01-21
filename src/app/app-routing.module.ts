import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionComponent, PhotoComponent } from './components';
import { HomeComponent } from './components/home/home.component';

// toDo How could we improve this routing?
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'collection/:collectionId', component: CollectionComponent },
  { path: 'collection/:collectionId/photo/:photoId', component: PhotoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomeComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { }
