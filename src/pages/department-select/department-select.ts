import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Department } from '../../models/department'
import { DepartmentProvider } from '../../providers/department-provider'
import { Observable } from 'rxjs/Rx'
// import { GeneralDataProvider } from '../../providers/general-data-provider'

/*
  Generated class for the DepartmentSelect page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-department-select',
  templateUrl: 'department-select.html'
})
export class DepartmentSelectPage {
  // departments : string[] = [];
  departments : Department[] = [];
  filterDepartmentIDs : Set<string> = new Set<string>();
  pageTitle = "選擇部門";
  callback : (Department);
  selectedDepartment: Department= null;
  pattern : string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: DepartmentProvider) 
  {

    let filterDepartments: Department[] = navParams.get("filterDepartments");
    if (filterDepartments)
    {
      filterDepartments.forEach(department => {
        this.filterDepartmentIDs.add(department.deptId);    
      });
    }
    
    var me = this;
    this.pattern = "";
    this.getDepartments(this.pattern).subscribe(m => me.departments = m);
    let title: string = navParams.get("pageTitle");
    if (null != title && title.trim().length > 0)
    {
        this.pageTitle = title;
    }
  }


  getDepartments(pattern?: string) :  Observable<Department[]>
  {
      var me = this;
      let departments = this.provider.getDepartments(pattern);
      return departments.map((x, idx) => {
        let output : Department[] = [];
        x.forEach(department => {
          if (!me.filterDepartmentIDs.has(department.deptId))
          {
            output.push(department);
          }      
        });
        return output;
      });
  }

  // getDepartments(owner: string, pattern?: string) : string[]
  // {
  //   let tempArray = this.provider.getDepartments().toArray()[0];
  //   let output : string[] = [];
  //   tempArray.forEach(department => {
  //     if (!this.filterDepartmentIDs.has(department))
  //     {
  //       output.push(department);
  //     }      
  //   });
  //   return output;
  // }

  onInput($event)
  {
    var me = this;
    this.getDepartments(this.pattern).subscribe( m => me.departments = m);    
  }


  selectDepartment(department: Department)
  {
    this.selectedDepartment = this.selectedDepartment === department ? null : department;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DepartmentSelectPage'); 
  }

  done()
  {
    let callback = this.navParams.get('callback');

    if(callback != null)
    {
      callback(this.selectedDepartment).then(()=>{
        this.navCtrl.pop();   
      });
    }
  }

}
