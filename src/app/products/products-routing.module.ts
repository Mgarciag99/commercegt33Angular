import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { SeeProductPageComponent } from './pages/see-product-page/see-product-page.component';
//localhost:4200/products

const routes: Routes = [
  { 
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'list-products',
        component: ListPageComponent
      },
      {
        path: 'see-product/:id',
        component: SeeProductPageComponent
      },
      {
        path: '**',
        redirectTo: 'list-products'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
