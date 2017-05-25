import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Api } from '../../providers/api';
import { MappGroup } from '../../models/mappgroup';
import { IMappGroupService } from '../../providers/imappgroup-service'

import 'rxjs/add/operator/map';

/*
  Generated class for the Message provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MockMappGroupProvider implements IMappGroupService{
  getMappGroups() : MappGroup[]
  {
    return null;
  }
  //   getMappGroup(owner: string, cimOwner: string, alarmType: string, authorityDept: string) : MappGroup[]
  // {
  //   return null;
  // }
}