import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GroupSearchPage } from '../group-search/group-search';
import { Group } from '../../models/group';
import { Employee } from '../../models/employee';
import { PeopleSearchPage } from '../people-search/people-search';
import { DepartmentSelectPage } from '../department-select/department-select';
/*
  Generated class for the Config page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-config',
  templateUrl: 'config.html'
})
export class ConfigPage {

//  items: Group[] = [];
//  items: Employee[] = [];
  items: string[] = ['CIM'];
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigPage');
  }
  
  testClick()
  {
  //  this.navCtrl.push(GroupSearchPage, {'callback': this.callbackFunction, 'pageTitle': "選擇群組", 'filterGroups': this.items})
  //  this.navCtrl.push(PeopleSearchPage, {'callback': this.callbackFunction, 'pageTitle': "選擇員工", 'filterEmployees': this.items})
  //  this.navCtrl.push(DepartmentSelectPage, {'callback': this.callbackFunction, 'pageTitle': "選擇部門", 'filterDepartments': this.items})
  }
  
  callbackFunction = (params) => 
  {
     return new Promise((resolve, reject) => {
            if (params)
            {
//              this.groups.push(params);
              this.items.push(params);
            }
            resolve();
         });
  }

}
