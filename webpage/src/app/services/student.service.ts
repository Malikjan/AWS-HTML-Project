import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Student } from '../model/student';

@Injectable()
export class StudentService {

  constructor(private http: Http) { }

  private URL: 'http://localhost:4200/assets/students/student.json';
  getStudentData(): Observable<Response> {
    return this.http.get('assets/students/student.json');
  }
}