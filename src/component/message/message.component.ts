import { Component, Input} from '@angular/core';
import { Message } from '../../models/message';

@Component({
    selector: 'message',
    templateUrl: './message.component.html'
})
export class MessageComponent
{
    @Input()
    msg: Message;
    constructor()
    {
    }

}