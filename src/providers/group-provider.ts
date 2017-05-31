import { Group } from '../models/group';
import { Observable } from 'rxjs/Rx'

/*
  Generated class for the Message provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export abstract class GroupProvider  {
  abstract getGroups(owner: string, pattern?: string) : Observable<Group[]>;
  abstract updateGroup(user: string, group: Group);
  abstract deleteGroup(user: string, groupId: string);
}