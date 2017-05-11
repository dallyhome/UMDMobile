import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { GroupProvider } from '../../mocks/providers/group-provider'
import { Group } from '../../models/group'
import { GroupEditPage } from '../group-edit/group-edit'


@Component({
  selector: 'page-groups',
  templateUrl: 'groups.html'
})
export class GroupsPage {
  groups : Group[] = [];

  constructor(public navCtrl: NavController, public provider: GroupProvider) {
    this.groups = provider.getGroups("");
  }

  gotoEdit(): void
  {
      this.navCtrl.push(GroupEditPage);
  }
}
