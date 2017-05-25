import { Component, Input, Output, EventEmitter} from '@angular/core';
import { NavController } from 'ionic-angular'
import { Subscribe } from '../../models/subscribe'

/*
  Generated class for the Subscription component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'subscription',
  templateUrl: 'subscription.component.html'
})
export class SubscriptionComponent {
  @Input()
  subscription: Subscribe;
  @Input()
  navCtrl: NavController;  
  @Output() editClick = new EventEmitter<Subscribe>();
  constructor() {

  }

}
