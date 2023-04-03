import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.sass'],
})
export class StudentDetailsComponent implements OnInit {
  studentId: number;
  student$: Observable<Student>;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
  ) {
    route.params.subscribe((params) => {
      this.studentId = params['id'];
    });
  }
  
  ngOnInit(): void {
    if (this.studentId) {
      this.student$ = this.studentService.getById(this.studentId);
    }
  }
}
