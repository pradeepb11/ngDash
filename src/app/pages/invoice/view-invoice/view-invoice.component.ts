import { Component, OnInit,  ViewChild, ElementRef  } from '@angular/core';

import jsPDF from 'jspdf';
import * as  pdfMake from 'pdfmake/build/pdfmake';
import * as  pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
import  htmlToPdfmake from 'html-to-pdfmake'

@Component({
  selector: 'app-view-invoice',
  templateUrl: './view-invoice.component.html',
  styleUrls: ['./view-invoice.component.scss']
})
export class ViewInvoiceComponent implements OnInit {

  @ViewChild('pdfTable') pdfTable: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  public downloadAsPDF(){
    const doc = new jsPDF();
    //get table html
    const pdfTable = this.pdfTable.nativeElement;
    // console.log(pdfTable)
    //html to pdf format
    var html = htmlToPdfmake(pdfTable.innerHTML);
    console.log(html)
   
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).open();
  }

}
