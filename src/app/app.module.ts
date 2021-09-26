import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HrModule } from './modules/hr/hr.module';
//import { UserCreateComponent } from './modules/hr/components/user/user-create/user-create.component';
//import { UserListComponent } from './modules/hr/components/user/user-list/user-list.component';
// import { HrRoutingModule } from './modules/hr/hr-routing.module';
// import { HrModule } from './modules/hr/hr.module';
 
 
@NgModule({
  declarations: [
    AppComponent,
    // HrModule,
    // UserCreateComponent,
    // UserListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //HrRoutingModule,
    HrModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
