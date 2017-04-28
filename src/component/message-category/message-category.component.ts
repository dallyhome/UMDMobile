import { Component, Input} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MessagesPage } from '../../pages/messages/messages'
import { Message } from '../../models/message';

@Component({
    selector: 'message-category',
    templateUrl: './message-category.component.html'
})
export class MessageCategoryComponent
{
    @Input()
    messages : Message[] = [];    
    @Input()
    category: string;
    @Input()
    navCtrl: NavController;
    constructor()
    {
    }

    pushPage(): void
    {
        this.navCtrl.push(MessagesPage, {'messages': this.messages})
    }
}