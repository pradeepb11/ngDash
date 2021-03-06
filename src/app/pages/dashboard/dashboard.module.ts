import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import {DataTablesModule} from 'angular-datatables'

import {HttpClientModule} from '@angular/common/http'
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DataTablesModule,
    HttpClientModule,
    NgChartsModule 
  ]
})
export class DashboardModule { 
  constructor(){
    console.log('Dashboard Module Working');
  }
}
