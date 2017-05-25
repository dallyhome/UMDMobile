import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Api } from '../../providers/api'
import { IGeneralDataService } from '../../providers/igeneral-data-service'
import { DEPARTMENTS } from '../DEPARTMENTS'
import { ALARMTYPES } from '../ALARMTYPES'

import 'rxjs/add/operator/map'

/*
  Generated class for the Message provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MockGeneralDataProvider implements IGeneralDataService {
  constructor(public http: Http) {
  }
  
  getDepartments() : string[]
  {
    return DEPARTMENTS;
  }

  getAlarmTypes() : string[]
  {
    return ALARMTYPES;
  }
}