import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SubscribeConfigPage } from '../subscribe-config/subscribe-config';
import { IAlarmSubjectService } from '../../providers/ialarm-subject-service'
import { AlarmSubject } from '../../models/alarm-subject';

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
category = String;
alarmsubjects: AlarmSubject[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: IAlarmSubjectService) {
    this.category = this.navParams.get('category');
    this.alarmsubjects = this.provider.getAlarmSubjects();   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubscribeAddPage');
  }

  gotoConfig(): void
  {
      this.navCtrl.push(SubscribeConfigPage, {category:this.category});
  }

}
