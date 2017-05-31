import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Api } from '../../providers/api'
import { GeneralDataProvider } from '../../providers/general-data-provider'
import { DEPARTMENTS } from '../DEPARTMENTS'
import { ALARMTYPES } from '../ALARMTYPES'
import { Observable } from 'rxjs/Rx'


import 'rxjs/add/operator/map'

/*
  Generated class for the Message provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MockGeneralDataProvider implements GeneralDataProvider {
  constructor(public http: Http) {
  }
  
  getDepartments() : Observable<string[]>
  {
    return Observable.from([DEPARTMENTS]);
  }

  getAlarmTypes() : Observable<string[]>
  {
    return Observable.from([ALARMTYPES]);
  }
}