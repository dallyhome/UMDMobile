import { Injectable } from '@angular/core';
import { MappGroup } from '../models/mappgroup';

import 'rxjs/add/operator/map';

/*
  Generated class for the Message provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export abstract class IMappGroupService  {
 abstract getMappGroups() : MappGroup[];
}