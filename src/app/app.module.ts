import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HrRoutingModule } from './modules/hr/hr-routing.module';
import { HrModule } from './modules/hr/hr.module';
import { UserListService } from './modules/hr/services/user/user-list-service';

 
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HrRoutingModule,
    HrModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
