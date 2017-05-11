import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
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
import { MessageProvider } from '../mocks/providers/message-provider'
import { MockGroupProvider } from '../mocks/providers/group-provider'
import { IGroupService } from '../providers/igroup-service'
import { IGeneralDataService } from '../providers/igeneral-data-service'
import { MockEmployeeProvider } from '../mocks/providers/employee-provider'
import { MockGeneralDataProvider } from '../mocks/providers/general-data-provider'
import { IEmployeeService } from '../providers/iemployee-service'

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
    GroupsPage,
    GroupEditPage,
    MessageDetailComponent,
    MessageComponent,
    MessageCategoryComponent,
    EmployeeComponent,
    GroupComponent,
    GroupEditComponent,
    PeopleSearchPage, 
    GroupSearchPage,
    DepartmentSelectPage,
    ConfigPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
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
    GroupsPage,
    GroupEditPage,
    PeopleSearchPage, 
    GroupSearchPage,
    DepartmentSelectPage,
    ConfigPage,
    TabsPage
  ],

  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, 
            , {provide: IGroupService, useClass: MockGroupProvider}
            , {provide: IEmployeeService, useClass: MockEmployeeProvider}
            , {provide: IGeneralDataService, useClass: MockGeneralDataProvider}
            , MessageProvider]
})
export class AppModule {}
