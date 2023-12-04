import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute,ParamMap} from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{

  selectedId :any;
  MyEmployees = [
    {id:1, Name:'Adil'},
    {id:2, Name:'Shivam'},
    {id:3,Name:'Priya'},
    {id:4,Name:'Kumar'},
    {id:5,Name:'Shivani'}
  ];

  constructor(private router : Router,private route:ActivatedRoute){
  }
  ngOnInit(){
    this.route.paramMap.subscribe((params : ParamMap) =>{
      let id = params.get('empid');
      this.selectedId = id;
    });
  }
  EmpClick(employeeData:any){
    this.router.navigate(['/employees',employeeData.id])
    // this.router.navigate(['/employees',employeeData.id,employeeData.Name])
  }

  isSelected(emp:any){
    return parseInt(emp.id) === parseInt(this.selectedId);
    }

}
