import { Message } from '../models/message';
export const MESSAGES: Message[] = [
      {
        body: `TFT2 RTQCS Loader fail test message`,
        alarmID: 'AALL-CIM-RTQCS-AP_fail',
        alarmMsg: 'RTQCS AP Fail',
        eqptID: '',
        occurDT: new Date('2017-01-02T11:00:01Z'),
        read: true
      },
      {
        body: 'TFT3 RTQCS Loader fail',
        alarmID: 'AALL-CIM-RTQCS-AP_fail',
        alarmMsg: 'RTQCS AP Fail',
        eqptID: '',
        occurDT: new Date('2017-01-02T11:30:01Z'),
        read: false
      },
      {
        body: 'STCO0200 alarm, code[0001]',
        alarmID: 'TFT3-PHOTO-EQP-alarm',
        alarmMsg: 'EQ alarm',
        eqptID: 'STCO0100',
        occurDT: new Date('2017-01-02T11:45:01Z'),
        read: false
      }
];