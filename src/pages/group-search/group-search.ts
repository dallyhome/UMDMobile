import { Component } from '@angular/core'
import { NavController, NavParams } from 'ionic-angular'
import { Group } from '../../models/group'
import { GroupProvider } from '../../providers/group-provider'
import { Observable } from 'rxjs/Rx'
/*
  Generated class for the PeopleSearch page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-group-search',
  templateUrl: 'group-search.html'
})
export class GroupSearchPage {
  groups : Group[] = [];
  filterGroupIDs : Set<string> = new Set<string>();
  pattern : string;
  pageTitle = "選擇群組";
  callback : (Group);
  selectedGroup : Group = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: GroupProvider) 
  {

    let filterGroups: Group[] = navParams.get("filterGroups");
    if (filterGroups)
    {
      filterGroups.forEach(group => {
        this.filterGroupIDs.add(group.groupId);    
      });
    }
    var me = this;
    this.getGroups("").subscribe(m => me.groups = m);    
    this.pattern = "";
    let title: string = navParams.get("pageTitle");
    if (null != title && title.trim().length > 0)
    {
        this.pageTitle = title;
    }
  }

  getGroups(owner: string, pattern?: string) : Observable<Group[]>
  {
      var me = this;
      let groups = this.provider.getGroups(owner, pattern);
      return groups.map((x, idx) => {
        let output : Group[] = [];
        x.forEach(group => {
          if (!me.filterGroupIDs.has(group.groupId))
          {
            output.push(group);
          }      
        });
        return output;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PeopleSearchPage');
  }

  ionViewDidLeave()
  {
    console.log('ionViewDidLeave PeopleSearchPage');
  }

  onInput($event)
  {
    var me = this;
    this.getGroups("", this.pattern).subscribe( m => me.groups = m);    
  }

  onCancel()
  {

  }

  onClear()
  {

  }

  selectGroup(group: Group)
  {
    this.selectedGroup = this.selectedGroup === group ? null : group;
  }

  done()
  {
    let callback = this.navParams.get('callback');

    if(callback != null)
    {
      callback(this.selectedGroup).then(()=>{
        this.navCtrl.pop();   
      });
    }
  }

}
