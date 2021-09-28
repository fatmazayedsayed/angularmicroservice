import { NgModule } from '@angular/core';

import { AuthComponent } from './auth.component';
import { NoAuthGuard } from './no-auth-guard.service';
import { AuthRoutingModule } from './auth-routing.module';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../modules/core/services/user.service';
import { CommonModule } from '@angular/common';
 
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { ApiService } from '../modules/core/services/api.service';
import { JwtService } from '../modules/core/services/jwt.service';
 

@NgModule({
  imports: [
    AuthRoutingModule,
   // FormsModule,    //added here too
    ReactiveFormsModule //added here too,
    ,CommonModule,
    HttpClientModule  
  ],
  declarations: [
    AuthComponent
  ],
  providers: [
    UserService,ApiService ,HttpClient ,JwtService,NoAuthGuard
  ]
})
export class AuthModule {}
