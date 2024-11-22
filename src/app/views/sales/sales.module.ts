import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { SalesComponent } from './sales.component';
import { ChartsModule } from '../charts/charts.module';


@NgModule({
  declarations: [
    SalesComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    ChartsModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SalesModule { }
