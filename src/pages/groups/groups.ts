import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { GroupEditPage } from '../group-edit/group-edit';


@Component({
  selector: 'page-groups',
  templateUrl: 'groups.html'
})
export class GroupsPage {
  groupEditPage;
  constructor(public navCtrl: NavController) {
     this.groupEditPage = GroupEditPage;
  }

  gotoEdit()
  {
      this.navCtrl.push(GroupEditPage);
  }
}
