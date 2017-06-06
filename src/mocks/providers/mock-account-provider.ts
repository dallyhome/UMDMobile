import { Injectable } from '@angular/core';
import { InxAccount } from '../../models/inx-account'
import { AccountProvider } from '../../providers/account-provider'
/*
 * @name ExtraInfoX
 * @description
 * Get InxAuth information
 * Requires {@link module:driftyco/ionic-native} and the Cordova plugin: 'ExtraInfo'
 */
@Injectable()
export class MockAccountProvider implements AccountProvider
{
    static account: InxAccount = {
          'comid': "sharon.tsai",
          'deveceKey': "",
          'empNo': "14127785",
          'name': "蔡世真",
          'accessToken': "",
          'refreshToken': ""
        };
    constructor()
    {

    }
    getInxAccount() : InxAccount
    {
        return MockAccountProvider.account;
    }

}