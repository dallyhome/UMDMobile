import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Group } from '../../models/group';
import { Employee } from '../../models/employee';
import { GroupSearchPage } from '../group-search/group-search';
import { PeopleSearchPage } from '../people-search/people-search';
import { DepartmentSelectPage } from '../department-select/department-select';
import { SubscribeConfigPage } from '../subscribe-config/subscribe-config';
import { Events} from 'ionic-angular';

/*
  Generated class for the SubscribeConfigSearch page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-subscribe-config-search',
  templateUrl: 'subscribe-config-search.html'
})
export class SubscribeConfigSearchPage {
  type : string;
  // items: string[] = [];
  // groups: string[] = [];
  // employees: string[] = [];
  // departments: string[] = [];
  mode : string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
     this.type = this.navParams.get('type');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SubscribeConfigSearchPage');
  }

  SearchClick(mode: string, type: string):void
  {
      this.mode = mode;
      this.type = type;
      // if (mode == 'group')
      // {
      //   this.navCtrl.push(GroupSearchPage, {'callback': this.callbackFunction, 'pageTitle': "選擇群組", 'filterGroups': this.groups})
      // }else if (mode == 'employee')
      // {
      //   this.navCtrl.push(PeopleSearchPage, {'callback': this.callbackFunction, 'pageTitle': "選擇員工", 'filterEmployees': this.employees})
      // }else if (mode == 'department')
      // {
      //   this.navCtrl.push(DepartmentSelectPage, {'callback': this.callbackFunction, 'pageTitle': "選擇部門", 'filterDepartments': this.departments})
      // }
      // this.navCtrl.pop();  
      // this.navCtrl.push(SubscribeConfigPage, {
      //   'type': this.type,
      //   'mode': this.mode})

      // this.navCtrl.push(SubscribeConfigPage, {
      //   'type': this.type,
      //   'mode': this.mode,
      //   'groups':this.groups,
      //   'employees':this.employees,
      //   'departments':this.departments})

      this.navCtrl.pop(); 
      this.events.publish('gotoSearch',this.mode);
/*   let callback = this.navParams.get('callback');

    if(callback != null)
    {
      callback(this.mode).then(()=>{
      });
    }*/
  }

  // callbackFunction = (params) => 
  // {
  //    return new Promise((resolve, reject) => {
  //           if (params)
  //           {
  //             if (this.mode =='group')
  //             {
  //                this.groups.push(params);
  //             }else if (this.mode =='employee')
  //             {
  //                this.employees.push(params);
  //             }else if (this.mode =='department')
  //             {
  //                this.departments.push(params);
  //             }
              
  //             // this.items.push(params);
  //           }
  //           resolve();
  //        });
  // }

  // doDelete(i): void
  // {
  //   if (this.mode =='group')
  //   {
  //      this.groups.splice(i, 1);
  //   }else if (this.mode =='employee')
  //   {
  //      this.employees.splice(i, 1);
  //   }else if (this.mode =='department')
  //   {
  //      this.departments.splice(i, 1);
  //   }
  // }

  // gotoConfig(): void
  // {
  //     this.navCtrl.push(SubscribeConfigPage,{
  //       'type':this.type, 
  //       'groups':this.groups,
  //       'employees':this.employees,
  //       'departments':this.departments
  //     } );
  // }

}
