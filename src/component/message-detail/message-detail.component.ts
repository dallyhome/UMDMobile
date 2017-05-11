import { Component, Input} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Message } from '../../models/message';

@Component({
    selector: 'message-detail',
    templateUrl: './message-detail.component.html'
})
export class MessageDetailComponent
{
    @Input()
    msg: Message;
    constructor()
    {
    }


}