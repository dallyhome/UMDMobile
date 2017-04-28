import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, AlertController } from "ionic-angular";
import { Push, StatusBar, Splashscreen } from 'ionic-native';
import { DetailsPage } from "../pages/details/details";
import { TabsPage } from '../pages/tabs/tabs';
import { PeopleSearchPage } from '../pages/people-search/people-search';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage = TabsPage;
  
  constructor(public platform: Platform, public alertCtrl: AlertController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
