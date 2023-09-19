import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/components/error-page/error-page.component';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: ()=> import('./products/products.module').then( m => m.ProductsModule )
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  // {
  //   path: '',
  //   redirectTo: 'products',
  //   pathMatch: 'full'
  // },
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
