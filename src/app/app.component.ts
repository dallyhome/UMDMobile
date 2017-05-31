import { Component, ViewChild } from '@angular/core'
import { Platform, Nav, AlertController } from "ionic-angular"
import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'
import { Push} from '@ionic-native/push'
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
            , public userProvider: ExtraInfoProvider, public messageProvider: MessageProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();


      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
    
      if (window.cordova)
      {
        FCMPlugin.getToken(
          (t) => {
            console.log("getToken:"+t);
          },
          (e) => {
            console.log(e);
          }
        );
        FCMPlugin.onNotification(
          (data) => {
            // let obj: message = JSON.parse(data);
            console.log('onNotification Data RAW: ', data);
            alert(JSON.stringify(data));
            if(data.wasTapped) 
            {
              // Background recieval (Even if app is closed),
              // bring up the message in UI
              this.messageProvider.set(data.occurDT,data.alarmID);
              console.log('onNotification wasTapped=true data: ' + data.occurDT+","+data.alarmID);
            }
            else
            {
              // Foreground recieval, update UI or what have you...
              // this.SqlStorage.set(obj.occruDT,obj.alarmID);
              // this.SqlStorage.set(mydate,JSON.stringify(data.notification.body));
              this.messageProvider.set(data.occruDT,data.alarmID);
              console.log('onNotification wasTapped=false data: ' + data.occurDT+","+data.alarmID);
            }
          },
          (msg,mydate)=>{
            console.log(" onNotification msg insert key:value "+mydate+":"+JSON.stringify( msg)); 
          },
          (e) => {
            console.log(e);
          }
        );      
        var me = this;
        // this.userProvider.getUserInfo().subscribe((result) => {
        //   MyApp.user = result;
        // }, (err) => {
        //   MyApp.user = undefined;
        // });
      }
      else
      {
      }
    });
  }
}