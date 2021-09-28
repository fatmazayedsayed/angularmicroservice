import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth-guard';
import { PagesComponent } from './pages.component';
 
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
     
      {
        path: 'hr',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('../modules/hr/hr.module').then((m) => m.HrModule),
      },
      {
        path: 'user',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('../modules/hr/user/user.module').then((m) => m.UserModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
