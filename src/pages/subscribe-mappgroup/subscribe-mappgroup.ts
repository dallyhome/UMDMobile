import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MappGroup } from '../../models/mappgroup';
import { IMappGroupService } from '../../providers/imappgroup-service'

/*
  Generated class for the SubscribeMappgroup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-subscribe-mappgroup',
  templateUrl: 'subscribe-mappgroup.html'
})
export class SubscribeMappgroupPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: IMappGroupService) {}
  id: string;
  description: string;
  mappgroups : MappGroup[] = [];
  mappgroup : MappGroup;
  ionViewDidLoad() {
    console.log('ionViewDidLoad SubscribeMappgroupPage');
  }

  onInput($event)
  {

  }

  
  done()
  {
    let callback = this.navParams.get('callback');

    if(callback != null)
    {
      this.mappgroup = {id: this.id, description: this.description};
      callback(this.mappgroup).then(()=>{
        this.navCtrl.pop();   
      });
    }
  }

}
