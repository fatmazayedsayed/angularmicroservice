import { Injectable, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './modules/core/guards/auth-guard';
import { PagesComponent } from './modules/pages.component';

import { BrowserModule } from '@angular/platform-browser';
const routes: Routes = [

  {

    path: '',
    component: PagesComponent,
    canActivate: [AuthGuard],
    data: { breadcrumb: 'SIDE_MENU.DASHBOARD' },
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },

    ],
  },
  
  {
    path: 'auth',
    loadChildren: () =>
      import('../app/auth/auth.module').then(
        (m) => m.AuthModule
      )

  },
];
@NgModule({
  imports: [BrowserModule,
    // FormsModule,
    //ReactiveFormsModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
@Injectable({
  providedIn: 'root'
})

export class AppRoutingModule { }
