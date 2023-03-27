import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'First Test App';
  listLetters: string[]=['a','b','c','d'];

  constructor(private _studentservice : StudentService) { 
    this.students = _studentservice.get();
  }
  students : Observable<any[]>;

}

