import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SubscribeAddPage } from '../subscribe-add/subscribe-add';
import { SubscriptionProvider } from '../../providers/subscription-provider'
import { Subscribe } from '../../models/subscribe';
import { SubscribeConfigPage } from '../subscribe-config/subscribe-config';
import { AccountProvider } from '../../providers/account-provider'
/*
  Generated class for the SubscribeEdit page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-subscribe-edit',
  templateUrl: 'subscribe-edit.html'
})
export class SubscribeEditPage {
alarmtype: string;
// filterargs: {alarmType: 'RTQCS'};  
subscriptions: Subscribe[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: SubscriptionProvider
                                                                        , public accountProvider: AccountProvider) {
       this.alarmtype = this.navParams.get('alarmtype');
       this.provider.getSubscribed(this.accountProvider.getInxAccount().empNo,this.alarmtype,'').subscribe(
         res => this.subscriptions = res
       );   
  }
   
  ionViewDidLoad() {
    console.log('ionViewDidLoad SubscribeEditPage');
  }
  
  gotoAdd(): void
  {
      this.navCtrl.push(SubscribeAddPage,  {alarmtype: this.alarmtype});
  }

  gotoEdit(subscription: Subscribe): void
  {
      this.navCtrl.push(SubscribeConfigPage, {'subscription': subscription,'alarmtype': this.alarmtype});
  }


}
