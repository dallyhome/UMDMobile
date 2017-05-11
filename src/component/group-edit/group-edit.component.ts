import { Component, Input, Output, EventEmitter } from '@angular/core'
import { NavController, NavParams } from 'ionic-angular'
import { Group } from '../../models/group'

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
    @Output() editClick = new EventEmitter<Group>();
    @Output() deleteClick = new EventEmitter<Group>();
    constructor()
    {


    }
}