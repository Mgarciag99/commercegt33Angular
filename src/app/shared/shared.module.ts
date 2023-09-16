import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ProgresBarrComponent } from './components/progres-barr/progres-barr.component';
import { MaterialModule } from '../material/material.module';
import { CardsSkeletonComponent } from './components/skeleton/cards-skeleton/cards-skeleton.component';


@NgModule({
  declarations: [
    ErrorPageComponent,
    ProgresBarrComponent,
    CardsSkeletonComponent
  ],
  exports: [
    ProgresBarrComponent,
    CardsSkeletonComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }
