import { Employee } from './employee'
export class GroupDetail
{
    constructor()
    {

    }
    groupId: string;  //群組ID
    groupName: string;  //群組名稱
    description: string;  //群組說明
    mappChatSn: string;  //MAPP 交談室編號
    registrar: string;  //註冊者
    groupUserList: Employee[]; //群組人員清單
}