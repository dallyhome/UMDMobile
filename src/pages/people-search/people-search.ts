import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the PeopleSearch page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-people-search',
  templateUrl: 'people-search.html'
})
export class PeopleSearchPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PeopleSearchPage');
  }

  onInput($event)
  {

  }

  onCancel()
  {

  }

  onClear()
  {

  }
}
