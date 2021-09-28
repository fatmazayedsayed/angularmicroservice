import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Observable,
  BehaviorSubject,
  ReplaySubject,
  observable,
  of,
} from 'rxjs';

import { ApiService } from './api.service';
import { JwtService } from './jwt.service';

import { map, distinctUntilChanged } from 'rxjs/operators';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable()
export class UserService {
  private currentUserSubject = new BehaviorSubject<User>({} as User);
  public currentUser = this.currentUserSubject
    .asObservable()
    .pipe(distinctUntilChanged());

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  userData: User;
  constructor(
    private readonly router: Router,
    private apiService: ApiService,
    private http: HttpClient,
    private jwtService: JwtService
  ) {
    this.userData = new User();
    this.userData.username = 'admin';
    this.userData.email = 'admin@admin.com';
    this.userData.bio = 'admin';
  }

  // Verify JWT in localstorage with server & load user's info.
  // This runs once on application startup.
  populate() {
    // If JWT detected, attempt to get & store user's info
    if (this.jwtService.getToken()) {
      this.apiService.get('/user').subscribe(
        (data) => this.setAuth(data.user),
        (err) => this.purgeAuth()
      );
    } else {
      // Remove any potential remnants of previous auth states
      this.purgeAuth();
    }
  }

  setAuth(user: User) {
    // Save JWT sent from server in localstorage
    this.jwtService.saveToken(user.token);
    // Set current user data into observable
    this.currentUserSubject.next(user);
    // Set isAuthenticated to true
    this.isAuthenticatedSubject.next(true);
  }

  purgeAuth() {
    // Remove JWT from localstorage
    this.jwtService.destroyToken();
    // Set current user to an empty object
    this.currentUserSubject.next({} as User);
    // Set auth status to false
    this.isAuthenticatedSubject.next(false);

    this.router.navigate(['/']);
  }

  attemptAuth(type: string | String, credentials: User): Observable<User> {
    const route = type === 'login' ? '/login' : '';

    // return this.apiService.post('/users' + route, {user: credentials})
    //   .pipe(map(
    //   data => {
    //     this.setAuth(data.user);
    //     return data;
    //   }
    // ));

    let data: User = new User();
    if (
      this.userData.email == credentials.email &&
      this.userData.username == credentials.username
    ) {
      credentials.token = 'true';
      this.setAuth(credentials);
      data = credentials;
    }

    return of(data);
  }

  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }

  // Update the user on the server (email, pass, etc)
  update(user: any): Observable<User> {
    return this.apiService.put('/user', { user }).pipe(
      map((data) => {
        // Update the currentUser observable
        this.currentUserSubject.next(data.user);
        return data.user;
      })
    );
  }

  isAuth(): boolean {
    const token = localStorage.getItem('jwtToken'); //token
    if (token) {
      return true;
    }
    return false;
  }
}
