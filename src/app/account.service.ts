import { Injectable } from '@angular/core';
import { timer, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private isLogged = false;
  private token = '';

  constructor() { }

  getToken() {
    return this.token;
  }

  isLoggedIn() {
    return this.isLogged;
  }

  login(): Observable<any> {
    const obs = timer(3000).pipe(map(() => {
      this.isLogged = true;
      this.token = 'sfsdf131235';
      return { token: this.token };
    }));
    return obs;
  }

  logout() {
    this.isLogged = false;
    this.token = undefined;
  }
}
