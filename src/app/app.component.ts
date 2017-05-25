import { Component, ViewChild } from '@angular/core'
import { Platform, Nav, AlertController } from "ionic-angular"
import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'
import { DetailsPage } from "../pages/details/details"
import { TabsPage } from '../pages/tabs/tabs'
//import { PeopleSearchPage } from '../pages/people-search/people-search'
import { GroupSearchPage } from '../pages/group-search/group-search'
import { ConfigPage } from '../pages/config/config';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage = TabsPage;
  
  constructor(public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public alertCtrl: AlertController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
