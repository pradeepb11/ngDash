import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit  } from '@angular/core';
import {InvoiceService} from '../../service/invoice.service';
import {Subject} from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import flatpickr from 'flatpickr';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
declare const $:any ;

@Component({
  selector: 'app-payout',
  templateUrl: './payout.component.html',
  styleUrls: ['./payout.component.scss'],
  providers:[InvoiceService]
})
export class PayoutComponent implements OnInit, OnDestroy, AfterViewInit  {
  productList:any[];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  Loading: false;
  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;
  filterForm: FormGroup;
  pipe: DatePipe;
  test:any;
  todayDate:Date;
  isUser:any = false;
  @ViewChild('dTable', {static:false}) dataTable:any;
  p: number = 1;
  filterTerm: string;

 members: any[] = [{  "id":1,  "name":"Jack",  "date":"2017-06-01" }, 
 {  "id":2,  "name":"Allen",  "date":"2017-08-07" }, 
 {  "id":3,  "name":"Annie",  "date":"2017-11-22" }];


  constructor(
    private invoiceService: InvoiceService,
    private fb: FormBuilder
  ) { }

  ngAfterViewInit(): void {
    
  }

  ngOnInit(): void {
    // this.productList = res.data;
    flatpickr(".flatpickr-minimum", {
      enableTime: true,
      weekNumbers: true, 
      dateFormat: 'Y/m/d H:m:s ',
  
    });

    // this.getallDataProduct();
    // this.dtTrigger.subscribe((res) =>{
    //   this.productList = res.data;
    // })
    this.getallDataProduct();

    this.setfilterFormValidate();
  }

  
  setfilterFormValidate(){
    this.filterForm = this.fb.group({
      fromDate: new FormControl('', Validators.required),
      toDate: new FormControl('', Validators.required)
    })
  }



  getallDataProduct(){
    this.isUser = true;
    this.invoiceService.getlocalnupay()
    .subscribe(
      (res: any) =>{
        // console.log(res.data);
        this.productList = res.data;
        // this.dtTrigger.next(res);
      
      }
    )
  }

  
  get fromDate() { return this.filterForm.get('fromDate')?.value }
  get toDate() { return this.filterForm.get('toDate')?.value; }

  reverseAndTimeStamp(dateString:any) {
    const reverse = new Date();
    return reverse.getTime();
  }
  applyFilter(){
  
    this.isUser = false;
  this.invoiceService.getlocalnupay()
  .subscribe(
    (res) =>{
      let start_Date = new Date("2022-03-26 00:00:10");
        let end_Date = new Date("2022-03-26 00:02:36");
      console.log(this.fromDate)
      console.log(this.toDate)
       if(start_Date && end_Date){
      //  let selectedMembers =  res.data.filter((m:any) => new Date(m.timestamp) >= start_Date && new Date(m.timestamp) <= end_Date);
        const selectedMembers = res.data.filter((m:any) =>
          
      new Date(m.timestamp) >= start_Date && new Date(m.timestamp) <= end_Date)
        
      
       this.productList = selectedMembers;
       console.log( this.productList);
 
       }else{
       console.log('else part');
       this.getallDataProduct();
       }
    }
  )
    
  }

  resetDate(){
    this.getallDataProduct();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }



}
