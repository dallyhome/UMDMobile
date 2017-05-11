import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
// import { MessageProvider } from '../../mocks/providers/message.provider'
import { Message } from '../../models/message';
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html'
})
export class MessagesPage {
  messages: Message[] = []
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
    this.messages = this.navParams.get('messages');
  }

}
