import { Injectable, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './modules/core/guards/auth-guard';
import { HrRoutingModule } from './modules/hr/hr-routing.module';
import { HrModule } from './modules/hr/hr.module';


 
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    //ReactiveFormsModule,
   

     
    //FormsModule,
    //ReactiveFormsModule ,
    AppRoutingModule,
    HrRoutingModule,
    HrModule,
  
   
    
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
@Injectable({
  providedIn: 'root'
})
export class AppModule { }
