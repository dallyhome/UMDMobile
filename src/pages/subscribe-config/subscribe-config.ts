import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SubscribeConfigSearchPage } from '../subscribe-config-search/subscribe-config-search';
import { SubscribeEditPage } from '../subscribe-edit/subscribe-edit';
import { GroupSearchPage } from '../group-search/group-search';
import { PeopleSearchPage } from '../people-search/people-search';
import { DepartmentSelectPage } from '../department-select/department-select';
import { SubscribeMappgroupPage } from '../subscribe-mappgroup/subscribe-mappgroup';
import { Events} from 'ionic-angular';

/*
  Generated class for the SubscribeConfig page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-subscribe-config',
  templateUrl: 'subscribe-config.html'
})
export class SubscribeConfigPage {
  groups: string[] = [];
  employees: string[] = [];
  departments: string[] = [];
  pgroups: string[] = [];
  pemployees: string[] = [];
  mappgroups: string[] = [];
  mode: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
      events.subscribe('gotoSearch',(mode) => {
        this.mode = mode;
        this.gotoSearch();
      });      
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubscribeConfigPage');
  }

  gotoConfigSearch(): void
  {
      this.navCtrl.push(SubscribeConfigSearchPage);
  }

  gotoEdit(): void
  {
      this.navCtrl.push(SubscribeEditPage, );
  }

  gotoSearch():void
  {
      if (this.mode == 'group')
      {
        this.navCtrl.push(GroupSearchPage, {'callback': this.callbackFunction, 'pageTitle': "選擇群組", 'filterGroups': this.groups})
      }else if (this.mode == 'employee')
      {
        this.navCtrl.push(PeopleSearchPage, {'callback': this.callbackFunction, 'pageTitle': "選擇員工", 'filterEmployees': this.employees})
      }else if (this.mode == 'department')
      {
        this.navCtrl.push(DepartmentSelectPage, {'callback': this.callbackFunction, 'pageTitle': "選擇部門", 'filterDepartments': this.departments})
      }else if (this.mode == 'pgroup')
      {
        this.navCtrl.push(GroupSearchPage, {'callback': this.callbackFunction, 'pageTitle': "選擇群組", 'filterGroups': this.pgroups})
      }else if (this.mode == 'pemployee')
      {
        this.navCtrl.push(PeopleSearchPage, {'callback': this.callbackFunction, 'pageTitle': "選擇員工", 'filterEmployees': this.pemployees})
      }else if (this.mode == 'mappgroup')
      {
        this.navCtrl.push(SubscribeMappgroupPage, {'callback': this.callbackFunction} )
      }    
  }

  callbackFunction = (params) => 
  {
     return new Promise((resolve, reject) => {
            if (params)
            {
              if (this.mode =='group')
              {
                 this.groups.push(params);
              }else if (this.mode =='employee')
              {
                 this.employees.push(params);
              }else if (this.mode =='department')
              {
                 this.departments.push(params);
              }else if (this.mode =='pgroup')
              {
                 this.pgroups.push(params);
              }else if (this.mode =='pemployee')
              {
                 this.pemployees.push(params);
              }else if (this.mode =='mappgroup')
              {
                 this.mappgroups.push(params);
              }
            }
            resolve();
         });
  }

  doDelete(mode:string,i): void
  {
              if (mode =='group')
              {
                 this.groups.splice(i, 1);
              }else if (mode =='employee')
              {
                 this.employees.splice(i, 1);
              }else if (mode =='department')
              {
                 this.departments.splice(i, 1);
              }else if (mode =='pgroup')
              {
                 this.pgroups.splice(i, 1);
              }else if (mode =='pemployee')
              {
                 this.pemployees.splice(i, 1);
              }else if (mode =='mappgroup')
              {
                 this.mappgroups.splice(i, 1);
              }     
  }

}
