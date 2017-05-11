import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';

import 'rxjs/add/operator/map';

/*
  Generated class for the Message provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export abstract class IEmployeeService  {
  abstract getEmployees(pattern: string) : Employee[];
}