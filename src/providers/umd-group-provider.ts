import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions } from '@angular/http'
import { Api } from './api'
import { Group } from '../models/group'
import { GroupProvider } from './group-provider'
import { InterceptedHttp} from '../app/intercepted-http'
import { Observable } from 'rxjs/Rx'

/*
  Generated class for the Message provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable(
)
export class UmdGroupProvider implements GroupProvider {

  constructor(public http: Http) {
    console.log('Hello Message Provider');
  }


  getGroups(empId:string, pattern?: string) : Observable<Group[]>
  {
     let headers = new Headers({ 'Content-Type': 'application/json' });
     let options = new RequestOptions({ headers: headers });

//     let url = 'http://localhost:3000/getGroups';
       let url = 'http://c4c010685.cminl.oa/UMD/Services/UMDDataService.svc/GetGroupData';
//     let url = 'http://tnvtwebapi.cminl.oa/NewWebApi/Agency/api/service/e1c5da29-9bf6-cf83-72fb-76d287c98bdb';

     let body = {"EmpId": `${empId}`};
     let output = [];
     let err = "";
     console.log('post start');
     return this.http.post(url, body, options).map(res => 
                      Api.toCamel(res.json()).groupDataList
                    );
     
  }

  updateGroup(user: string, group: Group)
  {

  }

  deleteGroup(user: string, groupId: string)
  {

  }
  
}
