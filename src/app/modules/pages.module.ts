import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
 import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PagesComponent],
  imports: [CommonModule, PagesRoutingModule,  HttpClientModule,
   // FormsModule,
  //  ReactiveFormsModule,
  ],
})
export class PagesModule { }
