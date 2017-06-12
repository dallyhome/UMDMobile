import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http'
import { Api } from './api'
import { Observable } from 'rxjs/Rx';
import { Subscribe } from '../models/subscribe';
import { AlarmActionSetting } from '../models/alarm-action-setting';
import { SubscriptionProvider } from './subscription-provider'
import { InterceptedHttp} from '../app/intercepted-http'

@Injectable()
export class UmdSubscriptionProvider implements SubscriptionProvider {
    constructor(public http: Http) {
    console.log('Hello Message Provider');
  }


  getSubscribed(empId:string, alarmtype?:string, pattern?: string) : Observable<Subscribe[]>
  {
     let headers = new Headers({ 'Content-Type': 'application/json' });
     let options = new RequestOptions({ headers: headers });

     let url = Api.getHttpUrl('GetSubscribedAlarmIdData');

     let body = {"EmpId": `${empId}`, "AlarmType": `${alarmtype}`, "Keyword": `${pattern}`};
     console.log('post start');
     return this.http.post(url, body, options).map(res => 
                      Api.toCamel(res.json()).alarmIdList
                    );
  }

  getNotSubscribed(empId:string, alarmtype?:string, pattern?: string) : Observable<Subscribe[]>
  {
     let headers = new Headers({ 'Content-Type': 'application/json' });
     let options = new RequestOptions({ headers: headers });

     let url = Api.getHttpUrl('GetNotSubscribeAlarmIdData');

     let body = {"EmpId": `${empId}`, "AlarmType": `${alarmtype}`, "Keyword": `${pattern}`};
     console.log('post start');
     return this.http.post(url, body, options).map(res => 
                      Api.toCamel(res.json()).alarmIdList
                    );
  }


}


