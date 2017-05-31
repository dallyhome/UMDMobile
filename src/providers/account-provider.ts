import { Injectable } from '@angular/core';
import { InxAccount } from '../models/inx-account';


/*
  Generated class for the Message provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export abstract class AccountProvider  {
  abstract getInxAccount() : InxAccount;
}