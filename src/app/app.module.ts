import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminComponent } from './admin/admin.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeptComponent } from './dept.component';
import { EmployeeComponent } from './employee.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DeptComponent,
    AdminComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports:[ 
    AdminComponent,
    FirstComponent,
    SecondComponent],
  providers: [],
  bootstrap: [EmployeeComponent,DeptComponent]
})
export class AppModule { }
