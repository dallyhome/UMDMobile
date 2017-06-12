import { Group } from '../models/group';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs/Rx'

/*
  Generated class for the Message provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export abstract class GroupProvider  {
  abstract getGroups(owner: string, pattern?: string) : Observable<Group[]>;
  abstract getGroupEmployee(groupId:string) : Observable<Employee[]>
  abstract addGroup(groupName: string,description:string,groupUsers:string[],empId:string): Observable<boolean>
  abstract updateGroup(groupId: string, groupName: string, description:string,leftGroupUsers:string[],newGroupUsers:string[],empId:string): Observable<boolean>
  abstract deleteGroup(groupId: string,empId: string): Observable<boolean>
}