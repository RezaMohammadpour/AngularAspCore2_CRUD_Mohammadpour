import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { FormsModule } from '@angular/forms'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { TblEmployee } from '../DBMohammadpour/tblEmployee';
import { employee } from '../Models/Employee';

import { map } from 'rxjs/operator/map';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.css']
})
export class EmployeeHomeComponent implements OnInit {

  firstname: string = "";
  lastname: string = "";
  email: string = "";
  id: string = "";
  status: boolean = false;
  FormHeader = ""
  editCustomer: boolean = false;
  employees: Observable<employee[]>
  test: any[];
  employeelist: employee[];
  mappedlist: employee[] = [];
  tempEmployee: employee;

  constructor(private dataservice: TblEmployee) {
  }
  ngOnInit() {
    this.dataservice.getEmployee().subscribe((tempdate) => { this.employeelist = tempdate; })
      , err => {
        console.log(err);
      }
  }

  //ShowRegForm = function (employee) {
  //  this.editCustomer = true;
  //  if (employee != null) {
  //    this.SetValuesForEdit(employee)

  //  }
  //  else {
  //    this.ResetValues();
  //  }
  //}


  ShowRegFormForDelete = function (employee) {
    this.editCustomer = true;
    if (employee != null) {
      this.SetValuesForDelete(employee)

    }
  }

  SetValuesForDelete = function (employee) {
    this.firstname = employee.firstname;
    this.lastname = employee.lastname;
    this.email = employee.email;
    this.id = employee.id;
    this.FormHeader = "Delete"

  }


  Edit(employee) {
    this.firstname = employee.firstname;
    this.lastname = employee.lastname;
    this.email = employee.email;
    this.id = employee.id;
    this.FormHeader = "Edit Employee"
    this.editCustomer = true;
  }

  Delete(employee) {

    this.firstname = employee.firstname;
    this.lastname = employee.lastname;
    this.email = employee.email;
    this.id = employee.id;
    this.FormHeader = "Delete Employee"
    this.editCustomer = true;
  }

  Insert(employee) {
    this.firstname = "";
    this.lastname = "";
    this.email = "";
    this.id = "";
    this.FormHeader = "Insert Employee"
    this.editCustomer = true;
  }


  SetValuesForEdit = function (employee) {
    this.firstname = employee.firstname;
    this.lastname = employee.lastname;
    this.email = employee.email;
    this.id = employee.id;
    this.FormHeader = "Edit Employee"
  }


  ResetValues() {
    this.firstname = "";
    this.lastname = "";
    this.email = "";
    this.id = "";
    this.FormHeader = "Add"
  }


  Save(form: NgForm) {


    this.tempEmployee = new employee
    this.tempEmployee.Email = form.value.email;
    this.tempEmployee.firstname = form.value.firstname;
    this.tempEmployee.lastname = form.value.lastname;
    this.tempEmployee.ID = form.value.id;


    switch (this.FormHeader) {
      case "Insert Employee":
        this.Addemployee(this.tempEmployee);
        break;
      case "Edit Employee":
        this.UpdateEmployee(this.tempEmployee);
        break;
      case "Delete Employee":
        this.DeleteEmployee(this.tempEmployee);
        break;
    }
    this.ResetValues();
  }


  Addemployee(e: employee) {
    this.dataservice.AddEmployee(this.tempEmployee).subscribe(res => {
      this.employeelist.push(res);
      alert("Employee inserted.")
      this.editCustomer = false;
    })
      , err => {
        alert("Error: " + err);
      }
  }


  UpdateEmployee(e: employee) {
    this.dataservice.EditEmployee(this.tempEmployee).subscribe(res => {
      this.editCustomer = false;
      this.dataservice.getEmployee().subscribe(res => {
        this.employeelist = res;
      });
      alert("Employee updated")
    });
  }



  DeleteEmployee(e: employee) {
    this.dataservice.DeleteEmployee(this.tempEmployee).subscribe(res => {
      this.editCustomer = false;
      this.dataservice.getEmployee().subscribe(res => {
        this.employeelist = res;
      });
      alert("Employee deleted. ")
    });
  }


}



