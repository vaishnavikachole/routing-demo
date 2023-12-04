import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ProductsComponent } from './products/products.component';
import { TshirtsComponent } from './tshirts/tshirts.component';
import { TrousersComponent } from './trousers/trousers.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';
import { CourseDetails2Component } from './course-details2/course-details2.component';

const routes: Routes = [
  {path:'',redirectTo: '/home',pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'contact', component: ContactComponent},
  {path:'employees',component:EmployeeListComponent},
  {path:'employees/:empid',component:EmployeeDetailsComponent},
  {path:'products',component:ProductsComponent,
  children:[
   {path:'tshirts',component:TshirtsComponent},
   {path:'trousers',component:TrousersComponent}
  ]},
  {path:'courses',component: CoursesComponent},
  {path:'courseDetails',
  outlet:'course_details',
  component: CoursesDetailsComponent
  },
  {path:'courseDetails2',outlet:'course_details2',component:CourseDetails2Component},
   // multiple route parameter
  //  {path:'employees/:emp-id/:emp-name',component:EmployeeDetailsComponent},

  {path:'**',component: PageNotFoundComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
