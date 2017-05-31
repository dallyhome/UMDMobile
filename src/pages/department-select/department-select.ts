import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GeneralDataProvider } from '../../providers/general-data-provider'

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
  departments : string[] = [];
  pageTitle = "選擇部門";
  filterDepartmentIDs : Set<string> = new Set<string>();
  selectedDepartment: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: GeneralDataProvider) 
  {
    let filterDepartments: string[] = navParams.get("filterDepartments");
    if (filterDepartments)
    {
      this.filterDepartmentIDs = new Set<string>(filterDepartments);
    }

    this.departments = this.getDepartments("");    
    let title: string = navParams.get("pageTitle");
    if (null != title && title.trim().length > 0)
    {
        this.pageTitle = title;
    }
  }

  getDepartments(owner: string, pattern?: string) : string[]
  {
    let tempArray = this.provider.getDepartments().toArray()[0];
    let output : string[] = [];
    tempArray.forEach(department => {
      if (!this.filterDepartmentIDs.has(department))
      {
        output.push(department);
      }      
    });
    return output;
  }

  selectDepartment(department: string)
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
