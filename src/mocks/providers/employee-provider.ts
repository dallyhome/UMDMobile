import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IEmployeeService } from '../../providers/iemployee-service'
import { Employee } from '../../models/employee'
import { EMPLOYEES } from '../EMPLOYEES'
import 'rxjs/add/operator/map';

/*
  Generated class for the EmployeeProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MockEmployeeProvider implements IEmployeeService {

  constructor(public http: Http) {
    console.log('Hello EmployeeProvider Provider');
  }
  
  getEmployees(pattern: string) : Employee[]
  {
    let comidPattern = new RegExp('^[a-z].*', "i");
    let empnoPattern = new RegExp('^[0-9].*');
    let output: Employee[] = [];
    let searchPattern = new RegExp('.*' + pattern + '.*', "i");
    if (!pattern || 0 === pattern.trim().length)
    {
      return EMPLOYEES;
    }
    if (comidPattern.test(pattern))
    {
        EMPLOYEES.forEach(element => {
          if (searchPattern.test(element.comid))
          {
            output.push(element);
          }
        });
    }
    else if (empnoPattern.test(pattern))
    {
        EMPLOYEES.forEach(element => {
          if (searchPattern.test(element.empNo))
          {
            output.push(element);
          }
        });
    }
    else 
    {
        EMPLOYEES.forEach(element => {
          if (searchPattern.test(element.name))
          {
            output.push(element);
          }
        });
    }
    
    return output;
  }
}
