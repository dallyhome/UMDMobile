import { Component, Input} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Group } from '../../models/group';

@Component({
    selector: 'group',
    templateUrl: './group.component.html'
})
export class GroupComponent
{
    @Input()
    checked: Boolean = false;
    @Input()
    group : Group;
    // @Input()
    // navCtrl: NavController;    
    constructor()
    {
    }

}