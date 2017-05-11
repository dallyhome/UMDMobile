import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { Group } from '../../models/group'

@Component({
  selector: 'page-group-edit',
  templateUrl: 'group-edit.html'
})
export class GroupEditPage {
  group: Group
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
    this.group = this.navParams.get('group');
  }

}
