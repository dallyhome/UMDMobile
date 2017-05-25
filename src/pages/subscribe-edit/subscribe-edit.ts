import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SubscribeAddPage } from '../subscribe-add/subscribe-add';
import { ISubscriptionService } from '../../providers/isubscription-service'
import { Subscribe } from '../../models/subscribe';
import { SubscribeConfigPage } from '../subscribe-config/subscribe-config';
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
category: string;
// filterargs: {alarmType: 'RTQCS'};  
subscriptions: Subscribe[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: ISubscriptionService) {
       this.category = this.navParams.get('category');
       this.subscriptions = this.provider.getSubscribed();   
  }
   
  ionViewDidLoad() {
    console.log('ionViewDidLoad SubscribeEditPage');
  }
  
  gotoAdd(): void
  {
      this.navCtrl.push(SubscribeAddPage,  {category: this.category});
  }

  gotoEdit(subscription: Subscribe): void
  {
      // this.navCtrl.push(SubscribeConfigPage, {'subscription': subscription});
  }


}
