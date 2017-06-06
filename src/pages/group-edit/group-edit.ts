import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { Group } from '../../models/group';
import { Employee } from '../../models/employee';
import { PeopleSearchPage } from '../people-search/people-search';
import { DepartmentSelectPage } from '../department-select/department-select';

@Component({
  selector: 'page-group-edit',
  templateUrl: 'group-edit.html'
})
export class GroupEditPage {
  group: Group
  nemployees: string[] = [];
  // items: string[] = ['CIM'];
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
    this.group = this.navParams.get('group');
  }

  SearchClick()
  {
   this.navCtrl.push(PeopleSearchPage, {'callback': this.callbackFunction, 'pageTitle': "選擇員工", 'filterEmployees': this.nemployees})
  }
  
  callbackFunction = (params) => 
  {
     return new Promise((resolve, reject) => {
            if (params)
            {
//              this.groups.push(params);
              this.nemployees.push(params);
            }
            resolve();
         });
  }

  doDelete(i): void
  {
   this.nemployees.splice(i, 1);   
  }

}
