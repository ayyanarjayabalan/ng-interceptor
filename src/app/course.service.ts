import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timer, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  getCourses(): Observable<any> {
    return this.http.get('/getAllCourses');
    // const courses = [
    //   {
    //     id: 1,
    //     name: 'Angular'
    //   },
    //   {
    //     id: 2,
    //     name: 'React'
    //   }
    // ];

    // const obs = timer(3000).pipe(map(() => {
    //   return courses;
    // }));

    // return obs;
  }
}
