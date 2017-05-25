import { Injectable } from '@angular/core';
import { AlarmSubject } from '../models/alarm-subject';

import 'rxjs/add/operator/map';

/*
  Generated class for the Message provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export abstract class IAlarmSubjectService  {
  abstract getAlarmSubjects() : AlarmSubject[];
}