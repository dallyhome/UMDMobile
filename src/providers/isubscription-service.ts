import { Injectable } from '@angular/core';
import { Subscribe } from '../models/subscribe';

import 'rxjs/add/operator/map';

/*
  Generated class for the Message provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export abstract class ISubscriptionService  {
  abstract getSubscribed() : Subscribe[];
//   abstract getSubsubscrib() : Subscribe[];
}