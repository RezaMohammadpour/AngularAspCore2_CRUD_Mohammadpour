


import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';
import 'rxjs/add/observable/of';
import 'rxjs/Rx';

import { employee } from '../Models/Employee';
import { Injectable } from '@angular/core';


@Injectable()
export class TblEmployee {

  public ROOT_URL: string = "https://localhost:44354/api/";

  employees: Observable<employee[]>;
  newemployee: Observable<employee>;

  constructor(private http: HttpClient) {

  }
  getEmployee() {
    return this.http.get<employee[]>(this.ROOT_URL + '/Employees')
  }

  AddEmployee(emp: employee) {
      const headers = new HttpHeaders().set('content-type', 'application/json');
      var newemployee = {
        firstname: emp.firstname, lastname: emp.lastname, Email: emp.Email
    }

    return this.http.post<employee>(this.ROOT_URL + '/Employees', newemployee, { headers })

  }

  
  EditEmployee(emp: employee) {
    const params = new HttpParams().set('ID', emp.ID);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      firstname: emp.firstname, lastname: emp.lastname, Email: emp.Email, ID: emp.ID
    }
    return this.http.put<employee>(this.ROOT_URL + '/Employees/' + emp.ID, body, { headers, params })

  }




  DeleteEmployee(emp: employee) {
    const params = new HttpParams().set('ID', emp.ID);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      firstname: emp.firstname, lastname: emp.lastname, Email: emp.Email, ID: emp.ID
    }
    return this.http.delete<employee>(this.ROOT_URL + '/Employees/' + emp.ID)

  }
}
