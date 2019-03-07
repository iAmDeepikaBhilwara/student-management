import { Component, OnInit } from '@angular/core';Student
import { STUDENT } from '../studentMock';
import { Student } from '../student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
   students=STUDENT;
   students1 :Student={id:0,name:"",class:"",subjects:"",schoolname:""};
  constructor() { }

  ngOnInit() {
  }

  addStudent(){
    if(this.students1.subjects.length > 0 && this.students1.name.length > 0)
    {
       this.students1.id=this.students.length+1;
       this.students.push(this.students1);
       localStorage.setItem('students',JSON.stringify(this.students));
       this.students1={id:0,name:"",class:"",subjects:"",schoolname:""};
    }
  }

  removeStudent(){

    JSON.parse(localStorage.getItem('students'));
    this.students.pop();
    localStorage.setItem('students',JSON.stringify(this.students));
    // for(var i=0;i<this.students.length;i++)
    // {
    //   if(this.students[i].id==this.students1.id)
    //   {
    //     this.students.splice(i,1);
    //   }
    // }
  }

  remove(num)
  {
    for(var i=0;i<this.students.length;i++)
    {
      if(this.students[i].id==num.id)
      {
        this.students.splice(i,1);
      }
    }
  }

  selectedStudent:Student;
  onSelect(stud:Student):void{
    this.selectedStudent=stud;
  }

  clearItems()
  {
    localStorage.setItem('students','[]');
  }

}
