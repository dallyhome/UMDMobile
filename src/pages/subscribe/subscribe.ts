import { Component } from '@angular/core'
import { NavController } from 'ionic-angular'
import { SubscribeEditPage } from '../subscribe-edit/subscribe-edit'
import { SubscribeAddPage } from '../subscribe-add/subscribe-add'
import { GeneralDataProvider } from '../../providers/general-data-provider'

@Component({
  selector: 'page-subscribe',
  templateUrl: 'subscribe.html'
})
export class SubscribePage {
  alarmtypes : string[] = [];
  constructor(public navCtrl: NavController, public provider: GeneralDataProvider) {
      var me = this;
      this.provider.getAlarmTypes().subscribe(
        m => me.alarmtypes = m
      );   
  }

  gotoEdit(alarmtype:string): void
  {
      this.navCtrl.push(SubscribeEditPage, {'alarmtype': alarmtype});
  }

}


