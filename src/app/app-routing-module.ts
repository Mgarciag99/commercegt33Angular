import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/components/error-page/error-page.component';

const routes: Routes = [
//   {
//     path: 'auth',
//     loadChildren: ()=> import('./auth/auth.module').then( m => m.AuthModule )
//   },
  {
    path: 'heroes',
    loadChildren: ()=> import('./products/products.module').then( m => m.ProductsModule )
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '',
    redirectTo: 'heroes',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
