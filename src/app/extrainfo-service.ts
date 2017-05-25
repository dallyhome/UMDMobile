import { Observable } from 'rxjs/Observable'
import { AppConfig } from '../providers/app-config'
import { Injectable } from '@angular/core';

declare var ExtraInfo: any;

/*
 * @name ExtraInfoX
 * @description
 * Get InxAuth information
 * Requires {@link module:driftyco/ionic-native} and the Cordova plugin: 'ExtraInfo'
 */
@Injectable()
export class ExtraInfoService
{
    constructor(public appConfig: AppConfig)
    {

    }
    authInfoDataObserver : any;
    authResultObserver: any;
    authInfoData: Observable<any> = null;
    authResult : Observable<any>;
    accessToken: string;
    getUserInfo(): Observable<any> {
        var me: ExtraInfoService = this;
        return Observable.create(observer => {
            ExtraInfo.getUserInfo(
                (result) => {
                    me.accessToken = result["accessToken"];
                    observer.next(result);
                    observer.complete();
                }, 
                (err) => {
                    me.accessToken = "";
                    observer.next(err);
                    observer.error();
                }, this.appConfig.appID)
        })
    }
  
    verifyWithAppID(): Observable<any> {
        var me: ExtraInfoService = this;
        return Observable.create(observer => {
            ExtraInfo.verifyWithAppID(
                (result) => {
                    me.accessToken = result["accessToken"];
                    observer.next(result);
                    observer.complete();
                }, 
                (err) => {
                    me.accessToken = "";
                    observer.next(err);
                    observer.error();
                }, this.appConfig.appID)
        })
    }

}