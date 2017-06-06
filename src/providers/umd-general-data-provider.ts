import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http'
import { Api } from './api'
import { Observable } from 'rxjs/Rx';
import { GeneralDataProvider } from './general-data-provider'
import { InterceptedHttp} from '../app/intercepted-http'

@Injectable()
export class UmdGeneralDataProvider implements GeneralDataProvider {
    constructor(public http: Http) {
    console.log('Hello Message Provider');
  }


  getAlarmTypes() : Observable<string[]>
  {

     let url = 'http://c4c010685.cminl.oa/UMD/Services/UMDDataService.svc/GetAlarmTypes';

     console.log('get start');
     return this.http.get(url).map(res => 
                      Api.toCamel(res.json().AlarmTypes)
                    );
  }


}