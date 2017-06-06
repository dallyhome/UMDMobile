import { NgModule, ErrorHandler } from '@angular/core'
import { HttpModule, Http } from '@angular/http'
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular'
import { XHRBackend, RequestOptions } from '@angular/http'
import { BrowserModule } from '@angular/platform-browser'
import { SQLite } from '@ionic-native/sqlite'
import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'
import { MyApp } from './app.component'
import { InterceptedHttp } from './intercepted-http'
import { GroupByPipe } from './groupby.pipe.ts'
import { AboutPage } from '../pages/about/about'
import { AuthTestPage } from '../pages/auth-test/auth-test'
import { ConfigPage } from '../pages/config/config'
import { CategorizedMessagesPage } from '../pages/categorized-messages/categorized-messages'
import { MessagesPage } from '../pages/messages/messages'
import { MessagesDetailPage } from '../pages/messages-detail/messages-detail'
import { GroupsPage } from '../pages/groups/groups'
import { GroupEditPage } from '../pages/group-edit/group-edit'
import { SubscribePage } from '../pages/subscribe/subscribe'
import { SubscribeAddPage } from '../pages/subscribe-add/subscribe-add'
import { SubscribeEditPage } from '../pages/subscribe-edit/subscribe-edit'
import { SubscribeConfigPage } from '../pages/subscribe-config/subscribe-config'
import { SubscribeMappgroupPage } from '../pages/subscribe-mappgroup/subscribe-mappgroup'
import { TabsPage } from '../pages/tabs/tabs'
import { PeopleSearchPage } from '../pages/people-search/people-search'
import { GroupSearchPage } from '../pages/group-search/group-search'
import { DepartmentSelectPage } from '../pages/department-select/department-select'
import { MessageComponent } from '../component/message/message.component'
import { MessageDetailComponent } from '../component/message-detail/message-detail.component'
import { GroupComponent } from '../component/group/group.component'
import { EmployeeComponent } from '../component/employee/employee.component'
import { GroupEditComponent } from '../component/group-edit/group-edit.component'
import { MessageCategoryComponent } from '../component/message-category/message-category.component'
import { SubscriptionComponent } from '../component/subscription/subscription.component'
import { DepartmentComponent } from '../component/department/department.component';
import { MessageProvider } from '../providers/message-provider'
import { GroupProvider } from '../providers/group-provider'
import { DepartmentProvider } from '../providers/department-provider'
import { AppConfig } from '../providers/app-config'
import { GeneralDataProvider } from '../providers/general-data-provider'
import { AccountProvider } from '../providers/account-provider'
import { EmployeeProvider } from '../providers/employee-provider'
import { ExtraInfoProvider } from '../providers/extrainfo-provider'
import { SubscriptionProvider } from '../providers/subscription-provider'
import { UmdGroupProvider } from '../providers/umd-group-provider'
import { UmdMessageProvider } from '../providers/umd-message-provider'
import { UmdEmployeeProvider } from '../providers/umd-employee-provider'
import { UmdDepartmentProvider } from '../providers/umd-department-provider'
import { UmdGeneralDataProvider } from '../providers/umd-general-data-provider'
import { AlarmSubjectProvider } from '../providers/alarm-subject-provider'
import { MockAlarmSubjectProvider } from '../mocks/providers/mock-alarm-subject-provider'
import { MockEmployeeProvider } from '../mocks/providers/mock-employee-provider'
import { MockGroupProvider } from '../mocks/providers/mock-group-provider'
import { MockDepartmentProvider } from '../mocks/providers/mock-department-provider'
import { MockGeneralDataProvider } from '../mocks/providers/mock-general-data-provider'
import { MockMappGroupProvider } from '../mocks/providers/mock-mappgroup-provider'
import { MockMessageProvider } from '../mocks/providers/mock-message-provider'
import { MockSubscriptionProvider } from '../mocks/providers/mock-subscription-provider'
import { MappGroupProvider } from '../providers/mappgroup-provider'
import { MockAccountProvider } from '../mocks/providers/mock-account-provider'
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
    TabsPage,
    DepartmentComponent
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
    SubscribeMappgroupPage,
    GroupsPage,
    GroupEditPage,
    PeopleSearchPage, 
    GroupSearchPage,
    DepartmentSelectPage,
    ConfigPage,
    TabsPage
  ],

  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler} 
            , {provide: GroupProvider, useClass: UmdGroupProvider}
            , {provide: EmployeeProvider, useClass: UmdEmployeeProvider}
            , {provide: DepartmentProvider, useClass: UmdDepartmentProvider}
            , {provide: GeneralDataProvider, useClass: UmdGeneralDataProvider}
            , {provide: MessageProvider, useClass: MockMessageProvider}
            , AppConfig
            , ExtraInfoProvider
            , {provide: SubscriptionProvider, useClass: MockSubscriptionProvider}
            , {provide: AlarmSubjectProvider, useClass: MockAlarmSubjectProvider}
            , {provide: MappGroupProvider, useClass: MockMappGroupProvider}
            , {provide: AccountProvider, useClass: MockAccountProvider}
            , StatusBar
            , SQLite
            , SplashScreen
            , {
                provide: Http,
                useFactory: (backend: XHRBackend, options: RequestOptions, extraInfoProvider: ExtraInfoProvider) => {
//                  return new InterceptedHttp(backend, options, extraInfoProvider);
                  return new Http(backend, options);
                },
                deps: [XHRBackend, RequestOptions, ExtraInfoProvider]
              }
            ]
})
export class AppModule {}
