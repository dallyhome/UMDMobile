import { Observable } from 'rxjs/Rx'
import { MappGroup } from '../models/mappgroup'

/*
  Generated class for the Message provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export abstract class MappGroupProvider  {
 abstract getMappGroups() : Observable<MappGroup[]>;
}