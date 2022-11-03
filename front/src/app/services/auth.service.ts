import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth$ = new BehaviorSubject<boolean>(false);
  private authToken = '';
  private authId = '';

  constructor(private http: HttpClient,
    private router: Router) { }

  createAuth(email: string, password: string) {
    return this.http.post<{ message: string }>('http://localhost:3000/api/auth/signup', { email: email, password: password });
  }

  getToken() {
    return this.authToken;
  }

  getAuthId() {
    return this.authId;
  }

  loginAuth(email: string, password: string) {
    return this.http.post<{ authId: string, token: string }>('http://localhost:3000/api/auth/login', { email: email, password: password }).pipe(
      tap(({ authId, token }) => {
        this.authId = authId;
        this.authToken = token;
        this.isAuth$.next(true);
      })
    );
  }

  logout() {
    this.authToken = '';
    this.authId = '';
    this.isAuth$.next(false);
    this.router.navigate(['login']);
  }

}
