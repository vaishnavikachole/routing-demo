import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap,Router} from '@angular/router';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit
{
  constructor(private route:ActivatedRoute,private router:Router)
  {

  }
  public EmpId : any;
  public EmpName : any;
  ngOnInit()
  {
    
    // let id = this.route.snapshot.paramMap.get('emp-id');
    // this.EmpId = id

    // let name = this.route.snapshot.paramMap.get('emp-name');
    // this.EmpName = name

    // snapshot gives issue when we do previous and next we didn't get data into ui
     //so we will use param map Observable

    this.route.paramMap.subscribe((params : ParamMap) =>{
      let id = params.get('empid');
      this.EmpId = id;
    });


  }
  previousEmp(){
    let previousId = parseInt(this.EmpId) - 1;
    this.router.navigate(['/employees',previousId])

  }
  nextEmp(){
    let nextId = parseInt(this.EmpId) + 1;
    this.router.navigate(['/employees',nextId])
  }
  goToEmployee(){
    let selectedId = this.EmpId
    // we are using option route parameter in {}
    this.router.navigate(['/employees',{id : selectedId}]);
  }
  
}
