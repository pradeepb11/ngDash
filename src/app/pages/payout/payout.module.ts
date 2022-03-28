import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayoutRoutingModule } from './payout-routing.module';
import { PayoutComponent } from './payout.component';
import {DataTablesModule} from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    PayoutComponent
  ],
  imports: [
    CommonModule,
    PayoutRoutingModule,
    DataTablesModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule
  ]
})
export class PayoutModule { }
