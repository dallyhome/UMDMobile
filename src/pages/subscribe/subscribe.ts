import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SubscribeEditPage } from '../subscribe-edit/subscribe-edit';
import { SubscribeAddPage } from '../subscribe-add/subscribe-add';
import { IGeneralDataService } from '../../providers/igeneral-data-service'

@Component({
  selector: 'page-subscribe',
  templateUrl: 'subscribe.html'
})
export class SubscribePage {
  alarmtypes : string[] = [];
  constructor(public navCtrl: NavController, public provider: IGeneralDataService) {
      this.alarmtypes = this.provider.getAlarmTypes();   
  }

  gotoEdit(category:string): void
  {
      this.navCtrl.push(SubscribeEditPage, {'category': category});
  }

}


