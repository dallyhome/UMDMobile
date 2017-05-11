import { Component, Input} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GroupEditPage } from '../../pages/group-edit/group-edit'
import { Group } from '../../models/group';

@Component({
    selector: 'group',
    templateUrl: './group.component.html'
})
export class GroupComponent
{
    @Input()
    groups : Group[] = [];
    // group: Group;
    @Input()
    navCtrl: NavController;    
    constructor()
    {
    }

    pushGroupEditPage(group): void
    {
        this.navCtrl.push(GroupEditPage, {'group': group})
    }
}