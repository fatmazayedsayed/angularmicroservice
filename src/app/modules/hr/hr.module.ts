import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrRoutingModule } from './hr-routing.module';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserCreateComponent } from './components/user/user-create/user-create.component';
import { UserListService } from './services/user/user-list-service';


@NgModule({
  declarations: [
    UserListComponent,
    UserCreateComponent
  ],
  imports: [
    CommonModule,
    HrRoutingModule,
  ],
  providers: [
    UserListService,
  ],

  exports: [
    UserListComponent,
    UserCreateComponent // <--- Enable using the component in other modules
  ]
})
export class HrModule { }
