import { Subscribe } from '../models/Subscribe';
export const SUBSCRIPTIONS: Subscribe[] = [
      {
          alarmID: 'AALL-CIM-RTQCS-AP_fail',
          alarmType: 'RTQCS',
          createUserEmpId: 'cat.wang',
          alarmActions: [
            {
              actionType: 1, 
              actionValue: 'flower.li', 
              enabled: true
            },
            {
              actionType: 2, 
              actionValue: 'SHARON01',
              enabled: true
            }
           ]
      },
      {
          alarmID: 'ATFT3-CIM-RTQCS-AP_fail',
          alarmType: 'RTQCS',
          createUserEmpId: 'cat.wang',
          alarmActions: [
            {
              actionType: 1, 
              actionValue: 'mary.li', 
              enabled: true
            },
            {
              actionType: 2, 
              actionValue: 'Dally01',
              enabled: true
            }
           ]
      }
];