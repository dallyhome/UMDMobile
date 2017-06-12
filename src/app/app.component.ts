import { Component, ViewChild } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Push, PushObject, PushOptions } from '@ionic-native/push'
import { LocalNotifications, ILocalNotification } from '@ionic-native/local-notifications';
import { Platform, Nav, AlertController } from "ionic-angular"
import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'
import { DetailsPage } from "../pages/details/details"
import { TabsPage } from '../pages/tabs/tabs'
//import { PeopleSearchPage } from '../pages/people-search/people-search'
import { GroupSearchPage } from '../pages/group-search/group-search'
import { ConfigPage } from '../pages/config/config';
import { ExtraInfoProvider } from '../providers/extrainfo-provider'
import { MessageProvider } from '../providers/message-provider';
import { InxAccount } from '../models/inx-account'


declare var FCMPlugin;
declare var window;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage = TabsPage;
  public static user: InxAccount;

  constructor(public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public alertCtrl: AlertController
            , public accountProvider: ExtraInfoProvider, public messageProvider: MessageProvider, private push: Push
            , private localNotifications: LocalNotifications) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();


      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
    
      if (window.cordova)
      {
        this.push.hasPermission()
            .then((res: any) => {

              if (res.isEnabled) {
                console.log('We have permission to send push notifications');
              } else {
                console.log('We do not have permission to send push notifications');
              }

        });

        const options: PushOptions = {
          android: {
              senderID: '834424631529'
          },
          ios: {
              alert: 'true',
              badge: true,
              sound: 'true'
          },
          windows: {}
        };        

        localNotifications.getAll().then((result) => {
          for(let m in result)
          {
            let a:ILocalNotification = m;
            console.log(a);
          }
        })

        const pushObject: PushObject = this.push.init(options);

        pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));

        pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));

        pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
                
      }
      else
      {
      }
    });
  }
}