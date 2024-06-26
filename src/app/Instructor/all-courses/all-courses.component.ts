import { Component, Input } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-all-courses',
  standalone: true,
  imports: [HttpClientModule,CommonModule,RouterModule],
  providers:[],
  templateUrl: './all-courses.component.html',
  styleUrl: './all-courses.component.css'
})
export class AllCoursesComponent  {
  constructor(private router: Router) {}
  // courseName:string="";
  // courseGrad:string="";
  // courseSupject:string="";
  courseStudents:number=0;
  @Input() oneGroup:any;
  
  background:string="background-color: #fff";
  changeBackgroundColor(isHovered: boolean) {
    if(isHovered)
    {
      this.background="background-color: rgb(214, 216, 229)";
    }else{
      this.background="background-color: #fff";
    }
    console.log(this.oneGroup);
  }
  redirectToCourseDetails(id:any) {
    window.location.href = '/Details'+id;
  }
}
