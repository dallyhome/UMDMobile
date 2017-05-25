import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { IGroupService } from '../../providers/igroup-service'
import { Group } from '../../models/group'
import { GroupEditPage } from '../group-edit/group-edit'
import { Observable } from 'rxjs/Rx'


@Component({
  selector: 'page-groups',
  templateUrl: 'groups.html'
})
export class GroupsPage {
  groups : Group[];

  constructor(public navCtrl: NavController, public provider: IGroupService) {
      var me: GroupsPage = this;
      provider.getGroups("10004698").subscribe(
          value => me.groups = value,
          error => me.groups = [],
          () => console.log("done")
      );
  } 

  gotoEdit(group: Group): void
  {
      this.navCtrl.push(GroupEditPage, {'group': group});
  }

  doDelete(group: Group): void
  {
   this.groups.splice(this.groups.indexOf(group), 1);   
  }


}
