import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SubscribeConfigPage } from '../subscribe-config/subscribe-config';
import { SubscriptionProvider } from '../../providers/subscription-provider'
import { Subscribe } from '../../models/subscribe';
import { AccountProvider } from '../../providers/account-provider'
// import { AlarmSubjectProvider } from '../../providers/alarm-subject-provider'
// import { AlarmSubject } from '../../models/alarm-subject';

/*
  Generated class for the SubscribeAdd page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-subscribe-add',
  templateUrl: 'subscribe-add.html'
})
export class SubscribeAddPage {
alarmtype: string;
// alarmsubjects: AlarmSubject[] = [];
nosubscriptions: Subscribe[] = [];
pattern : string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: SubscriptionProvider  
                                                                        , public accountProvider: AccountProvider) {
    var me = this;
    this.pattern="";
    this.alarmtype = this.navParams.get('alarmtype');
    this.provider.getNotSubscribed(this.accountProvider.getInxAccount().empNo,this.alarmtype,this.pattern).subscribe(
         res => this.nosubscriptions = res
       );  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubscribeAddPage');
  }

  gotoConfig(): void
  {
      this.navCtrl.push(SubscribeConfigPage, {alarmtype:this.alarmtype});
  }

  onInput($event)
  {
    var me = this;
     this.provider.getNotSubscribed(this.accountProvider.getInxAccount().empNo,this.alarmtype,this.pattern).subscribe(
         res => this.nosubscriptions = res
       ); 
  }


}
