import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Api } from '../../providers/api';
import { Message } from '../../models/message';
import { MESSAGES } from '../MESSAGES'

import 'rxjs/add/operator/map';

/*
  Generated class for the Message provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MessageProvider {
  constructor(public http: Http) {
  }
  
  getMessage() : Message[]
  {
    return MESSAGES;
  }

  getMessageDelay() : Promise<Message[]>
  {
    return new Promise(resolve => {
        // Simulate server latency with 2 second delay
        setTimeout(() => resolve(MESSAGES), 2000);
    });
  }

  getMessageFromUmd(beforeDT:Date) : Message[] //UMD Service provide
  {
     return MESSAGES;
  }

  saveMessage(message: Message)
  {

  }
}
