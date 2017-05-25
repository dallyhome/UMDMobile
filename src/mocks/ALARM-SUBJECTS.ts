import { AlarmSubject } from '../models/alarm-subject';
export const ALARMSUBJECTS: AlarmSubject[] = [
      {
         description: 'RTQCS 運作異常 AP_fail _TFT4',
         alarmID: 'ATFT1-CIM-RTQCS-AP_fail', 
         owner: 'cat.wang',
         cimOwner: 'cat.wang',
         alarmType: 'RTQCS'
      },
      {
         description: 'RTQCS 運作異常 AP_fail _TFT3',
         alarmID: 'ATFT2-CIM-RTQCS-AP_fail', 
         owner: 'cat.wang',
         cimOwner: 'cat.wang',
         alarmType: 'RTQCS'
      },
      {
         description: 'STCO0200 alarm, code[0001]',
         alarmID: 'TFT4-PHOTO-EQP-alarm', 
         owner: 'flower.li',
         cimOwner: 'flower.li',
         alarmType: 'EQPT'
      }
];