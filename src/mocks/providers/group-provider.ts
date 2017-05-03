import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Api } from '../../providers/api';
import { Group } from '../../models/group';
import { GROUPS } from '../GROUPS'

import 'rxjs/add/operator/map';

/*
  Generated class for the Message provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GroupProvider {
  constructor(public http: Http) {
  }
  
  getGroups(owner: string) : Group[]
  {
    return GROUPS;
  }
  updateGroup(user: string, group: Group) 
  {
    return null;
  }
  deleteGroup(user: string, groupId: string) 
  {
    return null;
  }
}