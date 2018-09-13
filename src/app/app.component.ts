import { Component } from '@angular/core';
import { ApihitService } from './apihit.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApiApplication';
  student:Student[];
  constructor(private apihit: ApihitService) 
  {
    this.apihit.getData().subscribe(response => {
    console.log(response.studentJoinResultSet);
    this.student=response.studentJoinResultSet;
    

  });
  }
  getAllStudentDetails(detail)
  {
    this.apihit.getData().subscribe(response=>
    {
      
    });
  }



 
  ngOnit()
  {
    
    
  }
}

interface Student{
  studentId:number;
  studentName:string;
  studentClass:number;
  studentAge:number;
  studentFees:number;
  studentDate:string;
}
