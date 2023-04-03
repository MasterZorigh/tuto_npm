import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Student } from '../models/student';

@Injectable()
export class StudentService {
  constructor(private http: HttpClient) {}

  get(): Observable<Student[]> {
    return this.http.get<Student[]>(environment.iutApiBaseUrl + '/student');
  }

  delete(id: number): Observable<string>{
    return this.http.delete<string>(environment.iutApiBaseUrl+"/student/"+id);
  }
}
