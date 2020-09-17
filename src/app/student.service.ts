import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentList = [
    { id : 1, name:'Mark', mark1: 40, mark2:57, mark3:67},
    { id : 2, name :'John', mark1: 66, mark2:45, mark3:98 },
    { id : 3, name : 'Meena', mark1: 95, mark2:55, mark3:56}
  ]
  constructor() { }


  calculateTotal(student){
    alert(student.mark1 + student.mark2 + student.mark3 + student.mark4)
  }

  edit(student)
  {
    alert("Cannot edit now")
  }
}
