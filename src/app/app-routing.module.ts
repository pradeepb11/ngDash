import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo:"auth", pathMatch:'full'
  },
  
  
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'invoice', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), data:{ title: ' Invoice'} },
 
  { path: '**', pathMatch:'full', loadChildren: () => import('./pages/pagenotfound/pagenotfound.module').then(m => m.PagenotfoundModule) }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }



