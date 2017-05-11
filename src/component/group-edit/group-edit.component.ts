import { Component, Input} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Group } from '../../models/group';

@Component({
    selector: 'group-edit',
    templateUrl: './group-edit.component.html'
})
export class GroupEditComponent
{

 @Input()
    group: Group;
    @Input()
    navCtrl: NavController;    
    constructor()
    {
    }


}