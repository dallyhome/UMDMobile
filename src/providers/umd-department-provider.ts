import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http'
import { Api } from './api'
import { Observable } from 'rxjs/Rx';
import { Department } from '../models/department';
import { DepartmentProvider } from './department-provider'
import { InterceptedHttp} from '../app/intercepted-http'

@Injectable()
export class UmdDepartmentProvider implements DepartmentProvider {
    constructor(public http: Http) {
    console.log('Hello Message Provider');
  }


  getDepartments(pattern?: string) : Observable<Department[]>
  {
     let headers = new Headers({ 'Content-Type': 'application/json' });
     let options = new RequestOptions({ headers: headers });

     let url = 'http://c4c010685.cminl.oa/UMD/Services/UMDDataService.svc/GetDepartmentData';

     let body = {"Keyword": `${pattern}`};
     let err = "";
     console.log('post start');
     return this.http.post(url, body, options).map(res => 
                      Api.toCamel(res.json()).departmentList
                    );
  }


}


