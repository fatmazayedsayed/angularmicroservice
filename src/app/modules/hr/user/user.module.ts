import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserListService } from './services/user/user-list-service';
import { UserCreateComponent } 
from './components/user-create/user-create.component';
import { UserListComponent } 
from './components/user-list/user-list.component';

 

@NgModule({
  declarations: [
    UserListComponent,
    UserCreateComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
  ],
  providers: [
    UserListService,
  ],

  exports: [
    UserListComponent,
    UserCreateComponent // <--- Enable using the component in other modules
  ]
})
export class UserModule { }
