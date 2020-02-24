import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CourseService } from './course.service';
import { AccountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-interceptor';

  loginStatus = 'Not logged In';

  showCourseButton = false;

  courses = [];

  constructor(private http: HttpClient, private courseService: CourseService, public accountService: AccountService) {
  }

  getCourses() {
    this.courseService.getCourses().subscribe((data) => {
      this.courses = data;
    });
  }

  login() {
    this.accountService.login().subscribe(
      (data) => {
        if (data && data.token && data.token.length > 0) {
          this.showCourseButton = true;
          this.loginStatus = 'Logged In';
          console.log(`Login Token value is : ${data.token}`);
        }
      }
    );;
  }

}
