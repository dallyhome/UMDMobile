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
  items;

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

  // getItems(ev) {
  //   // Reset items back to all of the items
  //   this.getMessage();

  //   // set val to the value of the ev target
  //   var val = ev.target.value;

  //   // if the value is an empty string don't filter the items
  //   if (val && val.trim() != '') {
  //     this.items = this.items.filter((item) => {
  //       return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
  //     })
  //   }
  // }
}
