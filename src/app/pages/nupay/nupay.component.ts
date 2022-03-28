import { Component, OnInit, OnDestroy, ViewChild  } from '@angular/core';

import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-nupay',
  templateUrl: './nupay.component.html',
  styleUrls: ['./nupay.component.scss']
})
export class NupayComponent implements OnInit, OnDestroy {
  @ViewChild(DataTableDirective, {static: false})
  datatableElement: DataTableDirective;

  min: number;
  max: number;
  minDate:any ;
  maxDate:any;
  dtOptions: DataTables.Settings = {};

  constructor() { }

  ngOnInit(): void {
    // $.fn['dataTable'].ext.search.push((settings:any, data:any, dataIndex:any) => {

    // //   var min = this.minDate.val();
    // //   var max = this.maxDate.val();
    // //   var date = new Date( data[4] );


    // //   // const id = parseFloat(data[0]) || 0; // use data for the id column
    // //   if (
    // //     ( min === null && max === null ) ||
    // //     ( min === null && date <= max ) ||
    // //     ( min <= date   && max === null ) ||
    // //     ( min <= date   && date <= max )
    // // ) {
    // //     return true;
    // //   }
    // //   return false;
    // });

    this.dtOptions = {
      ajax: './assets/json/nupay.json',
      columns: [{
        title: 'nupay_log_id',
        data: 'nupay_log_id'
      }, {
        title: 'log_from name',
        data: 'log_from'
      }, {
        title: 'log_name',
        data: 'log_name'
      },{
        title: 'log_type',
        data: 'log_type'
      },{
        title: 'log_blob',
        data: 'log_blob'
      },{
        title: 'txnRefNo',
        data: 'txnRefNo'
      },{
        title: 'merchant_id',
        data: 'merchant_id'
      },{
        title: 'timestamp',
        data: 'timestamp'
      }
    
    
    ]
    };
  }

  ngOnDestroy(): void {
    $.fn['dataTable'].ext.search.pop();
  }

  filterById(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.draw();
    });
  }

}
