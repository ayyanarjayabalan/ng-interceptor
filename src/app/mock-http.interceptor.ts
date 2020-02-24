import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Injectable()
export class MockHttpInterceptor implements HttpInterceptor {

  courses = [
    {
      id: 1,
      name: 'Angular'
    },
    {
      id: 2,
      name: 'React'
    }
  ];

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {

    return of(null).pipe(
      mergeMap(() => {
        const authToken = request.headers.get('Authorization');

        console.log('Auth Token ', authToken);

        if (!authToken || authToken === '') {
          return next.handle(request);
        }

        if (request.url.toLowerCase().endsWith('getallcourses')) {
          console.log(`Request - ${request.url} served by mock interceptor`);
          return of(new HttpResponse({ body: this.courses }));
        }
        return next.handle(request);
      })
    );

  }
}
