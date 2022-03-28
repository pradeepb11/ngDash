import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoiceComponent } from './invoice.component';
import { ListInvoiceComponent } from './list-invoice/list-invoice.component';
import { DataTablesModule } from 'angular-datatables';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { EditInvoiceComponent } from './edit-invoice/edit-invoice.component';
import { ViewInvoiceComponent } from './view-invoice/view-invoice.component';
import { PaynowComponent } from './paynow/paynow.component';
import { PaysuccesfullyComponent } from './paysuccesfully/paysuccesfully.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    InvoiceComponent,
    ListInvoiceComponent,
    AddInvoiceComponent,
    EditInvoiceComponent,
    ViewInvoiceComponent,
    PaynowComponent,
    PaysuccesfullyComponent
  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InvoiceModule {

  constructor(){
    console.log('Invoice module workking')
  }
 }
