import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { IGroupService } from '../../providers/igroup-service'
import { Group } from '../../models/group'
import { GroupEditPage } from '../group-edit/group-edit'


@Component({
  selector: 'page-groups',
  templateUrl: 'groups.html'
})
export class GroupsPage {
  groups : Group[] = [];

  constructor(public navCtrl: NavController, public provider: IGroupService) {
    this.groups = provider.getGroups("");
  }

  gotoEdit(group: Group): void
  {
      this.navCtrl.push(GroupEditPage, {'group': group});
  }

  doDelete(group: Group): void
  {
      
  }


}
