import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Api } from '../../providers/api';
import { AlarmSubject } from '../../models/alarm-subject';
import { ALARMSUBJECTS } from '../ALARM-SUBJECTS';
import { IAlarmSubjectService } from '../../providers/ialarm-subject-service'

import 'rxjs/add/operator/map';

/*
  Generated class for the Message provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MockAlarmSubjectProvider implements IAlarmSubjectService{
  constructor(public http: Http) {
  }
  
  getAlarmSubjects() : AlarmSubject[]
  {
    return ALARMSUBJECTS;
  }

}
