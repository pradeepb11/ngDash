import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-list-invoice',
  templateUrl: './list-invoice.component.html',
  styleUrls: ['./list-invoice.component.scss']
})
export class ListInvoiceComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  listOfInvoice: any;
  timeout:any;
  loader = false;
  overlay = false;


  public invoiceList =[
    {
      id:1, invoiceId:'INV-123456', refNo:'10', to:'Pradeep', currency:'INR', amount:1.00, email:'pradeep@paynet.co.in', create_at:'14-03-2022 13:11:07', status:'paid'
    },
    {
      id:2,
      invoiceId:'INV-123457',
      refNo:'11',
      to:'Sachin',
      currency:'INR',
      amount:1.00,
      email:'sachin@paynet.co.in',
      create_at:'14-03-2022 13:11:07',
      status:'partially paid'

    },
    {
      id:3,
      invoiceId:'INV-123458',
      refNo:'12',
      to:'Harsh',
      currency:'INR',
      amount:1.00,
      email:'harsh@paynet.co.in',
      create_at:'14-03-2022 13:11:07',
      status:'overdue'

    },
    {
      id:4,
      invoiceId:'INV-123459',
      refNo:'13',
      to:'Naz',
      currency:'INR',
      amount:1.00,
      email:'naz@paynet.co.in',
      create_at:'14-03-2022 13:11:07',
      status:'paid'

    }
  ]

  constructor() { }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true
    };


    this.listOfInvoice = this.invoiceList;

    




  }

  goToUrl():void{

    this.loader = true;
    this.overlay = true

    setTimeout(() => {
      this.loader = false;
      this.overlay = false;
      window.location.href='http://localhost:4300/';
    }, 2000);

   
  }

}
