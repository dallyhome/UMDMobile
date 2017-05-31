import { Component } from '@angular/core'
import { NavController, NavParams } from 'ionic-angular'
import { FormControl } from '@angular/forms'
import { Employee } from '../../models/employee'
import { EmployeeProvider } from '../../providers/employee-provider'
import { Observable } from 'rxjs/Rx'
import { AccountProvider } from '../../providers/account-provider'

/*
  Generated class for the PeopleSearch page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-people-search',
  templateUrl: 'people-search.html'
})
export class PeopleSearchPage {
  employees : Employee[] = [];
  filterEmployeeIDs : Set<string> = new Set<string>();
  pageTitle = "選擇人員";
  callback : (Employee);
  selectedEmployee : Employee = null;
  pattern : string;
  searchControl: FormControl;
  searching: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: EmployeeProvider
                                                                  , public accountProvider: AccountProvider) 
  {
    this.searchControl = new FormControl();
    
    let filterEmployees: Employee[] = navParams.get("filterEmployees");
    if (filterEmployees)
    {
      filterEmployees.forEach(employee => {
        this.filterEmployeeIDs.add(employee.empId);    
      });
    }

    this.employees = [];    
    this.pattern = "";

    let title: string = navParams.get("pageTitle");
    if (null != title && title.trim().length > 0)
    {
        this.pageTitle = title;
    }
  }

  // getEmployees(owner: string, pattern?: string) : Observable<Employee>
  // {
  //   var me = this;
  //   return Observable.from(this.provider.getEmployees('10004698', pattern).toArray()[0])
  //   .filter( (obs, idx) =>
  //            {
  //              return me.filterEmployeeIDs.has(obs[idx].empNo);
  //            }
  //          );
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PeopleSearchPage');
//     this.setFilteredItems();
 
        this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
            this.searching = false;
            if (search.length > 0)
            {
              this.getEmployees();
            }
            else
            {
              this.employees = [];
            }
 
        });    
  }

  getEmployees()
  {
    var me = this;
    this.provider.getEmployees(this.accountProvider.getInxAccount().empNo, this.pattern).subscribe(res => me.employees = res);    

  }

  onSearchInput()
  {
    this.searching = true;
  }
  // onInput($event)
  // {
  //   this.getEmployees();
  // }

  // onCancel()
  // {

  // }

  // onClear()
  // {

  // }

  selectEmployee(employee: Employee)
  {
    this.selectedEmployee = this.selectedEmployee === employee ? null : employee;
  }

  done()
  {
    let callback = this.navParams.get('callback');

    if(callback != null)
    {
      callback(this.selectedEmployee).then(()=>{
        this.navCtrl.pop();   
      });
    }
  }
  
}
