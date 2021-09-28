import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './modules/core/guards/auth-guard';
import { ApiService } from './modules/core/services/api.service';
import { JwtService } from './modules/core/services/jwt.service';
import { UserService } from './modules/core/services/user.service';
import { HrRoutingModule } from './modules/hr/hr-routing.module';
import { HrModule } from './modules/hr/hr.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HrRoutingModule,
    HrModule,
    HttpClientModule,
  ],
  providers: [AuthGuard, UserService, ApiService, HttpClient, JwtService],
  bootstrap: [AppComponent],
})
@Injectable({
  providedIn: 'root',
})
export class AppModule {}
