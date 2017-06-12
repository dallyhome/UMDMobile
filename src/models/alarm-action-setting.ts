export class AlarmActionSetting
{
    settingType: string; //M:Mail, AC:MApp交談室, AP:MApp單一User, AG: MApp群組
    mailRecipient: string; //Mail對象(AD帳號/&[部門代碼])
    mailName: string; //Mail人員名稱 (若MailRecipient為部門代碼, 則此參數為空)
    mailEmpId: string; //Mail人員工號 (若MailRecipient為部門代碼, 則此參數為空)
    mAppChatSn: string; //MAPP 交談室編號
    mAppChatName: string; //MAPP 交談室名稱
    mAppRecipient: string;  //MAPP 人員名稱 / 群組名稱
    mAppEmpId: string; //MAPP 人員工號
    groupId: string; //群組ID
    enabled: boolean; //true: 啟用, false: 停用
    clmEmpId: string; //新增設定人員工號
    clmUserName: string; //新增設定人員名稱
}