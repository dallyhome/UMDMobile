import { Component, Input} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MessagesDetailPage } from '../../pages/messages-detail/messages-detail'
import { Message } from '../../models/message';

@Component({
    selector: 'message',
    templateUrl: './message.component.html'
})
export class MessageComponent
{
    @Input()
    msg: Message;
    @Input()
    navCtrl: NavController;
    constructor()
    {
    }

    pushMsgDetailPage(): void
    {
        this.navCtrl.push(MessagesDetailPage, {'msg': this.msg})
    }

}