import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-detail-list',
  templateUrl: './student-detail-list.component.html',
  styleUrls: ['./student-detail-list.component.css']
})
export class StudentDetailListComponent implements OnInit {


  constructor(public studentService : StudentService) { }

  ngOnInit(): void {
  }
  
}
