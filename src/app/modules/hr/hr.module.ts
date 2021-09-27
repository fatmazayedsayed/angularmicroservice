import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrRoutingModule } from './hr-routing.module';
import { UserModule } from './user/user.module';


@NgModule({
  
  imports: [
    CommonModule,
    HrRoutingModule,
    UserModule,
  ],
  providers: [
   
  ],

  exports:
  [
    UserModule,

  ]
})
export class HrModule { }
