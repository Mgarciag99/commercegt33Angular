import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ProductsRoutingModule } from './products-routing.module';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';

import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { SeeProductPageComponent } from './pages/see-product-page/see-product-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SearchComponent } from './components/search/search.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { CardComponent } from './components/card/card.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CarrouselItemsComponent } from './components/carrousel-items/carrousel-items.component';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  declarations: [
    LayoutPageComponent,
    ListPageComponent,
    SeeProductPageComponent,
    NavBarComponent,
    SearchComponent,
    CarrouselComponent,
    CardComponent,
    CarrouselItemsComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    InfiniteScrollModule
  ]
})
export class ProductsModule { }
