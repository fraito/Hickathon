import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { EMPLOYEE_LOGIN_URL } from '../shared/constants/urls';
import { IEmployeeLogin } from '../shared/interfaces/IEmployeeLogin';
import { Employee } from '../shared/models/Employee';

const USER_KEY = 'Employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeeSubject =
    new BehaviorSubject<Employee>(this.getEmployeeFromLocalStorage());
  public employeeObservable:Observable<Employee>;
  constructor(private http:HttpClient, private toastrService:ToastrService) {
    this.employeeObservable = this.employeeSubject.asObservable();
  }

  public get currentEmployee():Employee{
    return this.employeeSubject.value;
  }

  login(employeeLogin:IEmployeeLogin):Observable<Employee>{
    return this.http.post<Employee>(EMPLOYEE_LOGIN_URL, employeeLogin).pipe(
      tap({
        next: (employee) =>{
          this.setEmployeeToLocalStorage(employee);
          this.employeeSubject.next(employee);
          this.toastrService.success(
            `Welcome to Hicron ${employee.username}!`,
            'Login Successful'
          )
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error, 'Login Failed');
        }
      })
    );
  }

  logout(){
    this.employeeSubject.next(new Employee());
    localStorage.removeItem(USER_KEY);
    window.location.reload();
  }

  private setEmployeeToLocalStorage(user:Employee){
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  private getEmployeeFromLocalStorage():Employee{
    const employeeJson = localStorage.getItem(USER_KEY);
    if(employeeJson) return JSON.parse(employeeJson) as Employee;
    return new Employee();
  }
}
