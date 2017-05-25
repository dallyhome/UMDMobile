import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ExtraInfoService } from '../../app/extrainfo-service';
import { AppConfig } from '../../providers/app-config';
declare var ExtraInfo: any;

@Component({
  selector: 'page-auth-test',
  templateUrl: 'auth-test.html'
})
export class AuthTestPage {
  constructor(public extraInfo:ExtraInfoService, public navCtrl: NavController, public appConfig: AppConfig) {
  }
  apiResult: string;
  apiError: string;
  getUserInfo()
  {
      var me: AuthTestPage = this;
      this.extraInfo.getUserInfo().subscribe((result) => {
        me.apiResult = me.extraInfo.accessToken;// JSON.stringify(result);
      }, (err) => {
        me.apiError = err;
      });
    //   this.extraInfo.getUserInfo(this.appID).then((result) => {
    //       this.apiResult = JSON.stringify(result);
    //   }, (err) => {
    //       this.apiError = err;
    //   });
  };

  verifyWithAppID()
  {
      var me: AuthTestPage = this;
      this.extraInfo.verifyWithAppID().subscribe((result) => {
        me.apiResult = me.extraInfo.accessToken;// JSON.stringify(result);
      }, (err) => {
        me.apiError = err;
      });
      // this.extraInfo.verifyWithAppID(this.appID).then((result) => {
      //     this.apiResult = JSON.stringify(result);
      // }, (err) => {
      //     this.apiError = err;
      // });  
  };
}
