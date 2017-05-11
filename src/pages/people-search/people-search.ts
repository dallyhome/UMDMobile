import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Employee } from '../../models/employee'
import { IEmployeeService } from '../../providers/iemployee-service'
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: IEmployeeService) 
  {
    let filterEmployees: Employee[] = navParams.get("filterEmployees");
    if (filterEmployees)
    {
      filterEmployees.forEach(employee => {
        this.filterEmployeeIDs.add(employee.empNo);    
      });
    }

    this.employees = this.getEmployees("");    
    this.pattern = "";

    let title: string = navParams.get("pageTitle");
    if (null != title && title.trim().length > 0)
    {
        this.pageTitle = title;
    }
  }

  getEmployees(owner: string, pattern?: string) : Employee[]
  {
    let tempArray = this.provider.getEmployees(pattern);
    let output : Employee[] = [];
    tempArray.forEach(employee => {
      if (!this.filterEmployeeIDs.has(employee.empNo))
      {
        output.push(employee);
      }      
    });
    return output;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PeopleSearchPage');
  }

  onInput($event)
  {
    this.employees = this.provider.getEmployees(this.pattern);    
  }

  onCancel()
  {

  }

  onClear()
  {

  }

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
