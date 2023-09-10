import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ProgresBarrComponent } from './components/progres-barr/progres-barr.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    ErrorPageComponent,
    ProgresBarrComponent
  ],
  exports: [
    ProgresBarrComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }
