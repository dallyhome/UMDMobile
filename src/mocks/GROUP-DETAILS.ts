import { GroupDetail } from '../models/group-detail';
export const GROUPDETAILS: GroupDetail[] = [
      {
          groupId: '103',
          groupName: 'PHOTO1',
          description: 'Photo department',
          mappChatSn: 'PHOTO1',
          registrar: '10000001',
          groupUserList: [
            {
        empId: '10000001',
        adId: 'jack.wu',
        name: '蔡小明'
            },
            {
        empId: '10003305',
        adId: 'frank.wu',
        name: '李明全'
            }
           ]
      },
      {
          groupId: 'idETCH1',
          groupName: 'ETCH1',
          description: 'Etch department',
          mappChatSn: 'ETCH1',
          registrar: '10010008',
          groupUserList: [
            {
        empId: '10010008',
        adId: 'mary.li',
        name: '張碧如'
            },
            {
        empId: '10020008',
        adId: 'flower.li',
        name: '李小花'
            }
           ]
      }
];