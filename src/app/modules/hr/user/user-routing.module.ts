import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NoAuthGuard } from "../../../auth/no-auth-guard.service";
import { AuthGuard } from "../../core/guards/auth-guard";
import { UserCreateComponent } from "./components/user-create/user-create.component";
import { UserListComponent } from "./components/user-list/user-list.component";

const routes: Routes = [
  {
    path: 'hr/user/userlist',    component: UserListComponent, 
       canActivate: [AuthGuard],
  },
  {
    path: 'hr/user/usercreate',    component: UserCreateComponent,    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
