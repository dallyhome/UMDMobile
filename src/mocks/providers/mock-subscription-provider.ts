import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Api } from '../../providers/api';
import { Subscribe } from '../../models/subscribe';
import { AlarmActionSetting } from '../../models/alarm-action-setting';
import { SUBSCRIPTIONS } from '../SUBSCRIPTIONS';
import { SubscriptionProvider } from '../../providers/subscription-provider'

import { Observable } from 'rxjs/Rx';

/*
  Generated class for the Message provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MockSubscriptionProvider implements SubscriptionProvider{
  getSubscribed(empId:string, alarmtype?:string, pattern?: string) : Observable<Subscribe[]>
  {
    return Observable.from([SUBSCRIPTIONS]);
  }
  getNotSubscribed(empId:string, alarmtype?:string, pattern?: string) : Observable<Subscribe[]>
  {
    return Observable.from([]);
  }
}