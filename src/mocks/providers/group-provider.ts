import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Api } from '../../providers/api';
import { Group } from '../../models/group';
import { GROUPS } from '../GROUPS'
import { IGroupService } from '../../providers/igroup-service'

import 'rxjs/add/operator/map';

/*
  Generated class for the Message provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MockGroupProvider implements IGroupService {
  constructor(public http: Http) {
  }
  
  getGroups(owner: string, pattern?: string) : Group[]
  {
    let output: Group[] = [];
    let tempGroups: Group[] = [];
    let remainsGroups: Group[];
    if (!pattern || 0 === pattern.trim().length)
    {
      return GROUPS;
    }
    let searchPattern = new RegExp('.*' + pattern + '.*', "i");
    GROUPS.forEach(element => {
      if (searchPattern.test(element.groupName))
      {
        output.push(element);
      }
      else
      {
        tempGroups.push(element);        
      }
    });
    remainsGroups = tempGroups;
    remainsGroups.forEach(element => {
      if (searchPattern.test(element.description))
      {
        output.push(element);
      }
    });

    return output;
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