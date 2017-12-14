import { Component, OnInit } from '@angular/core';
import { Student } from '../../model/student';
import { StudentService } from '../../services/student.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(
    private studentService: StudentService
  ) { }

  Student: Student[];

  ngOnInit() {
    this.loadStudent();
  }

  private loadStudent() {
    this.studentService.getStudentData()
      .subscribe((res:Response) =>{
        console.log(JSON.stringify(res.json()));
          this.Student=res.json()['Students'];          
      })
  }
}
