import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { XHRBackend, RequestOptions } from '@angular/http'
import { BrowserModule } from '@angular/platform-browser';
import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'
import { MyApp } from './app.component';
import { InterceptedHttp } from './intercepted-http';
import { GroupByPipe } from './groupby.pipe.ts'
import { AboutPage } from '../pages/about/about';
import { AuthTestPage } from '../pages/auth-test/auth-test';
import { ConfigPage } from '../pages/config/config';
import { CategorizedMessagesPage } from '../pages/categorized-messages/categorized-messages';
import { MessagesPage } from '../pages/messages/messages';
import { MessagesDetailPage } from '../pages/messages-detail/messages-detail';
import { GroupsPage } from '../pages/groups/groups';
import { GroupEditPage } from '../pages/group-edit/group-edit';
import { SubscribePage } from '../pages/subscribe/subscribe';
import { SubscribeAddPage } from '../pages/subscribe-add/subscribe-add';
import { SubscribeEditPage } from '../pages/subscribe-edit/subscribe-edit';
import { SubscribeConfigPage } from '../pages/subscribe-config/subscribe-config';
import { SubscribeConfigSearchPage } from '../pages/subscribe-config-search/subscribe-config-search';
import { SubscribeMappgroupPage } from '../pages/subscribe-mappgroup/subscribe-mappgroup';
import { TabsPage } from '../pages/tabs/tabs';
import { PeopleSearchPage } from '../pages/people-search/people-search';
import { GroupSearchPage } from '../pages/group-search/group-search';
import { DepartmentSelectPage } from '../pages/department-select/department-select';
import { MessageComponent } from '../component/message/message.component'
import { MessageDetailComponent } from '../component/message-detail/message-detail.component'
import { GroupComponent } from '../component/group/group.component'
import { EmployeeComponent } from '../component/employee/employee.component'
import { GroupEditComponent } from '../component/group-edit/group-edit.component'
import { MessageCategoryComponent } from '../component/message-category/message-category.component'
import { SubscriptionComponent } from '../component/subscription/subscription.component'
import { MessageProvider } from '../mocks/providers/message-provider'
import { MockGroupProvider } from '../mocks/providers/group-provider'
import { GroupProvider } from '../providers/group-provider'
import { AppConfig } from '../providers/app-config'
import { IGroupService } from '../providers/igroup-service'
import { IGeneralDataService } from '../providers/igeneral-data-service'
import { MockEmployeeProvider } from '../mocks/providers/employee-provider'
import { MockGeneralDataProvider } from '../mocks/providers/general-data-provider'
import { IEmployeeService } from '../providers/iemployee-service'
import { ExtraInfoService } from './extrainfo-service';
import { MockSubscriptionProvider } from '../mocks/providers/subscription-provider'
import { ISubscriptionService } from '../providers/isubscription-service'
import { MockAlarmSubjectProvider } from '../mocks/providers/alarm-subject-provider'
import { IAlarmSubjectService } from '../providers/ialarm-subject-service'
import { MockMappGroupProvider } from '../mocks/providers/mappgroup-provider'
import { IMappGroupService } from '../providers/imappgroup-service'

@NgModule({
  declarations: [
    MyApp,
    GroupByPipe,
    AboutPage,
    AuthTestPage,
    ConfigPage,
    CategorizedMessagesPage,
    MessagesPage,
    MessagesDetailPage,
    SubscribePage,
    SubscribeAddPage,
    SubscribeEditPage,
    SubscribeConfigPage,
    SubscribeConfigSearchPage,
    SubscribeMappgroupPage,
    GroupsPage,
    GroupEditPage,
    MessageDetailComponent,
    MessageComponent,
    MessageCategoryComponent,
    EmployeeComponent,
    GroupComponent,
    GroupEditComponent,
    SubscriptionComponent,
    PeopleSearchPage, 
    GroupSearchPage,
    DepartmentSelectPage,
    ConfigPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule,
    BrowserModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    AuthTestPage,
    ConfigPage,
    CategorizedMessagesPage,
    MessagesPage,
    MessagesDetailPage,
    SubscribePage,
    SubscribeAddPage,
    SubscribeEditPage,
    SubscribeConfigPage,
    SubscribeConfigSearchPage,
    SubscribeMappgroupPage,
    GroupsPage,
    GroupEditPage,
    PeopleSearchPage, 
    GroupSearchPage,
    DepartmentSelectPage,
    ConfigPage,
    TabsPage
  ],

  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, 
            , {provide: IGroupService, useClass: GroupProvider}
            , {provide: IEmployeeService, useClass: MockEmployeeProvider}
            , {provide: IGeneralDataService, useClass: MockGeneralDataProvider}
            , MessageProvider
            , AppConfig
            , ExtraInfoService
            , {provide: ISubscriptionService, useClass: MockSubscriptionProvider}
            , {provide: IAlarmSubjectService, useClass: MockAlarmSubjectProvider}
            , {provide: IMappGroupService, useClass: MockMappGroupProvider}
            , StatusBar
            , SplashScreen
            , {
                provide: InterceptedHttp,
                useFactory: (backend: XHRBackend, options: RequestOptions, extraInfoService: ExtraInfoService) => {
                  return new InterceptedHttp(backend, options, extraInfoService);
                },
                deps: [XHRBackend, RequestOptions, ExtraInfoService]
              }
            ]
})
export class AppModule {}
