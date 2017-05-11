import { Injectable } from '@angular/core';
import { Group } from '../models/group';

import 'rxjs/add/operator/map';

/*
  Generated class for the Message provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export abstract class IGroupService  {
  abstract getGroups(owner: string, pattern?: string) : Group[];
  abstract updateGroup(user: string, group: Group);
  abstract deleteGroup(user: string, groupId: string);
}