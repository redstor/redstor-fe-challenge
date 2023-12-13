import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// HBERNARDI - improvements:
// Lazy Loading:
// In the new code, the loadChildren property is used in the route configuration, allowing for lazy loading of modules. Lazy loading is a technique that loads modules on demand, which can significantly improve the initial loading time of your application.
// Each route now loads its associated module only when the route is navigated to, reducing the initial bundle size and improving performance.
// Module Separation:
// Each route now corresponds to a separate module (HomeModule, CollectionModule, and PhotoModule). This modularization helps in organizing your codebase and makes it easier to manage and maintain.
// Each feature module (HomeModule, CollectionModule, PhotoModule) is responsible for defining and configuring its own routes, making the code more modular and encapsulated.
// Dynamic Module Import:
// The use of dynamic module imports with import() allows for a more flexible and dynamic loading of modules. This can be particularly beneficial in large applications where not all modules need to be loaded upfront.
// Reduced Imports:
// In the new code, there is no need to import individual components (HomeComponent, CollectionComponent, PhotoComponent) directly in the routing module. The components are now encapsulated within their respective feature modules.