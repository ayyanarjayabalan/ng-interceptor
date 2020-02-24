import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { AccountService } from './account.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private accountService: AccountService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const headers = request.headers
      .set('Authorization', this.accountService.getToken());
    const authReq = request.clone({ headers });
    return next.handle(authReq);
  }
}
