import { Component } from '@angular/core';

//import { AuthTestPage } from '../auth-test/auth.test';
import { CategorizedMessagesPage } from '../categorized-messages/categorized-messages';
import { SubscribePage } from '../subscribe/subscribe';
import { GroupsPage } from '../groups/groups';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = CategorizedMessagesPage;
  tab2Root: any = SubscribePage;
  tab3Root: any = GroupsPage;
  constructor() {

  }
}
