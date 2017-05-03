import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { GroupByPipe } from './groupby.pipe.ts'
import { AboutPage } from '../pages/about/about';
import { AuthTestPage } from '../pages/auth-test/auth-test';
import { CategorizedMessagesPage } from '../pages/categorized-messages/categorized-messages';
import { MessagesPage } from '../pages/messages/messages';
import { GroupsPage } from '../pages/groups/groups';
import { GroupEditPage } from '../pages/group-edit/group-edit';
import { SubscribePage } from '../pages/subscribe/subscribe';
import { TabsPage } from '../pages/tabs/tabs';
import { PeopleSearchPage } from '../pages/people-search/people-search';
import { MessageComponent } from '../component/message/message.component'
import { GroupComponent } from '../component/group/group.component'
import { MessageCategoryComponent } from '../component/message-category/message-category.component'
import { MessageProvider } from '../mocks/providers/message-provider'
import { GroupProvider } from '../mocks/providers/group-provider'

@NgModule({
  declarations: [
    MyApp,
    GroupByPipe,
    AboutPage,
    AuthTestPage,
    CategorizedMessagesPage,
    MessagesPage,
    SubscribePage,
    GroupsPage,
    GroupEditPage,
    MessageComponent,
    MessageCategoryComponent,
    GroupComponent,
    PeopleSearchPage, 
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
    CategorizedMessagesPage,
    MessagesPage,
    SubscribePage,
    GroupsPage,
    GroupEditPage,
    PeopleSearchPage, 
    TabsPage
  ],

  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, MessageProvider, GroupProvider]
})
export class AppModule {}
