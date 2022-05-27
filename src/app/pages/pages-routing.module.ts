import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [{ path: '', component: PagesComponent,
  children:[
    { path: '', loadChildren: () => import('../pages/invoice/invoice.module').then(m => m.InvoiceModule) },
    {path:'pagenotfound', loadChildren: () => import('../pages/pagenotfound/pagenotfound.module').then(m => m.PagenotfoundModule)},
    { path: '**', pathMatch:'full', loadChildren: () => import('../pages/pagenotfound/pagenotfound.module').then(m => m.PagenotfoundModule) }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
