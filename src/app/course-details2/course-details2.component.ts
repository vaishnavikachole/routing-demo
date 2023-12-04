import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-course-details2',
  templateUrl: './course-details2.component.html',
  styleUrls: ['./course-details2.component.css']
})
export class CourseDetails2Component 
{
  constructor(private router: Router){

  }
  close(){
    this.router.navigate([{outlets: {'course_details':null,'course_details2':null}}])
  }

}
