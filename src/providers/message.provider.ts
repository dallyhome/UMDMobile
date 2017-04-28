import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Api } from './api';
import { Message } from '../models/message';
import 'rxjs/add/operator/map';

/*
  Generated class for the Message provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MessageProvider {

  constructor(public http: Http, public api: Api) {
    console.log('Hello Message Provider');
  }
  
  getMessage(beforeDate:Date) : Message[]
  {
    return null
  }
}
