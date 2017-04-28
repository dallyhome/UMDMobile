import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ExtraInfoX } from '../../app/extrainfox';
declare var ExtraInfo: any;

@Component({
  selector: 'page-auth-test',
  templateUrl: 'auth-test.html'
})
export class AuthTestPage {
  constructor(public navCtrl: NavController) {
      this.extraInfo = new ExtraInfoX();
  }
  private extraInfo: ExtraInfoX
  apiResult: string;
  apiError: string;
  appID = "RVVLiNxw1mk";
  getUserInfo()
  {
      this.extraInfo.getUserInfo(this.appID).then((result) => {
          this.apiResult = JSON.stringify(result);
      }, (err) => {
          this.apiError = err;
      });
  };

  verifyWithAppID()
  {
      this.extraInfo.verifyWithAppID(this.appID).then((result) => {
          this.apiResult = JSON.stringify(result);
      }, (err) => {
          this.apiError = err;
      });  
  };
}
