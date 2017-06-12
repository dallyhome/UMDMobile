import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SubscribeEditPage } from '../subscribe-edit/subscribe-edit';
import { GroupSearchPage } from '../group-search/group-search';
import { PeopleSearchPage } from '../people-search/people-search';
import { DepartmentSelectPage } from '../department-select/department-select';
import { SubscribeMappgroupPage } from '../subscribe-mappgroup/subscribe-mappgroup';
import { Events} from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular'
import { Subscribe } from '../../models/subscribe';
import { AlarmAction } from '../../models/alarm-action';
import { AlarmActionSetting } from '../../models/alarm-action-setting';
import { AlarmProvider } from '../../providers/alarm-provider';

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
  subscription: Subscribe;
  alarmtype: string;
  alarmActionSettings: AlarmActionSetting[] = [];
  oalarmActions: AlarmAction[] = [];
  nalarmActions: AlarmAction[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events, public platform: Platform
                                           , public provider: AlarmProvider, public actionsheetCtrl: ActionSheetController) {
          this.subscription = this.navParams.get('subscription');
          this.alarmtype = this.navParams.get('alarmtype');
          if (this.subscription != null)
          {
             this.provider.getAlarmActionSetting(this.subscription.alarmId).subscribe(
                 res => this.alarmActionSettings = res
             ); 
          }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubscribeConfigPage');
  }

  gotoEdit(): void
  {
      this.navCtrl.pop(SubscribeEditPage);
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

  openMenu(menuType: number) {
    let menuButtons = undefined;
    switch(menuType)
    {
      case 1:
        menuButtons = [
          {
            text: 'Mail-選擇群組',
            icon: !this.platform.is('ios') ? 'trash' : null,
            handler: () => {
              this.mode = 'group';
              this.navCtrl.push(GroupSearchPage, {'callback': this.callbackFunction, 'pageTitle': "選擇群組", 'filterGroups': this.groups})
            }
          },
          {
            text: 'Mail-選擇人員',
            icon: !this.platform.is('ios') ? 'share' : null,
            handler: () => {
              this.mode = 'employee';            
              this.navCtrl.push(PeopleSearchPage, {'callback': this.callbackFunction, 'pageTitle': "選擇人員", 'filterEmployees': this.employees})
            }
          },
          {
            text: 'Mail-選擇部門',
            icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
            handler: () => {
            this.mode = 'department';
              this.navCtrl.push(DepartmentSelectPage, {'callback': this.callbackFunction, 'pageTitle': "選擇部門", 'filterDepartments': this.departments})
            }
          },
          {
            text: 'Cancel',
            role: 'cancel', // will always sort to be on the bottom
            icon: !this.platform.is('ios') ? 'close' : null,
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ];
        break;
      case 2:
        menuButtons = [
          {
            text: 'MAPP-選擇群組',
            icon: !this.platform.is('ios') ? 'trash' : null,
            handler: () => {
            this.mode = 'pgroup';
              this.navCtrl.push(GroupSearchPage, {'callback': this.callbackFunction, 'pageTitle': "選擇群組", 'filterGroups': this.pgroups})
            }
          },
          {
            text: 'MAPP-選擇人員',
            icon: !this.platform.is('ios') ? 'share' : null,
            handler: () => {
            this.mode = 'pemployee';
              this.navCtrl.push(PeopleSearchPage, {'callback': this.callbackFunction, 'pageTitle': "選擇人員", 'filterEmployees': this.pemployees})
            }
          },
          {
            text: 'MAPP-輸入聊天室ID',
            icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
            handler: () => {
            this.mode = 'mappgroup';
              this.navCtrl.push(SubscribeMappgroupPage, {'callback': this.callbackFunction} )
            }
          },
          {
            text: 'Cancel',
            role: 'cancel', // will always sort to be on the bottom
            icon: !this.platform.is('ios') ? 'close' : null,
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ];
        break;
    }
    let actionSheet = this.actionsheetCtrl.create({
      title: '通知對象',
      cssClass: 'action-sheets-basic-page',
      buttons: menuButtons
    });
    actionSheet.present();
  }
}
