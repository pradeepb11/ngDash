import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs'
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(
    private _http: HttpClient
  ) { }


  getAllData(){
   return this._http.get('https://jsonplaceholder.typicode.com/posts', httpOptions)
  }

  getnupaydata(){
    return this._http.get('https://merchants.paynet.co.in/dashboardapi/nupay_logs/', httpOptions);
  }

  getlocalnupay(): Observable<any>{
    return this._http.get('./assets/json/nupay.json', httpOptions) }
}
