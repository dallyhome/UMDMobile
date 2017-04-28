
declare var ExtraInfo: any;

/*
 * @name ExtraInfoX
 * @description
 * Get InxAuth information
 * Requires {@link module:driftyco/ionic-native} and the Cordova plugin: 'ExtraInfo'
 */
export class ExtraInfoX
{
    getUserInfo(appID: string): Promise<any> {
        return new Promise((resolve, reject) => {
            ExtraInfo.getUserInfo(resolve, reject, appID);
        });
    }

    verifyWithAppID(appID: string): Promise<any> {        
        return new Promise((resolve, reject) => {
            ExtraInfo.verifyWithAppID(resolve, reject, appID);
        });
    }
}