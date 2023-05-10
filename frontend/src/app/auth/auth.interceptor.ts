import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeService } from '../services/employee.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private employeeService: EmployeeService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const employee = this.employeeService.currentEmployee;
    if(employee.token)
    {
      request = request.clone({
        setHeaders:{
          access_token: employee.token
        }
      })
    }
    return next.handle(request);
  }
}
