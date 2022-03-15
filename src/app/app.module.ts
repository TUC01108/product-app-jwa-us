import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer.component';
import { EmployeeComponent } from './employee.component';
import { ReviewsComponent } from './reviews.component';

@NgModule({
  declarations: [
    AppComponent, EmployeeComponent, CustomerComponent, ReviewsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
