import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';

import { TblEmployee } from './DBMohammadpour/tblEmployee'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeHomeComponent,
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule
  ],
  providers: [TblEmployee],
  bootstrap: [AppComponent]
})
export class AppModule { }
