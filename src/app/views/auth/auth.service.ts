import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Authresonse } from './auth.model';
import { Subject, BehaviorSubject, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

import { User } from './user.model';

import { ApiService } from 'src/app/api/api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new BehaviorSubject<User | null>(null);
  userData = new BehaviorSubject<User | null>(null);
  error = new Subject<String>();

  constructor(private http: HttpClient, private router: Router, private apiService: ApiService) { }

  storeUserData(userData: any) {
    localStorage.setItem('user', JSON.stringify(userData));
  }

  GetUserData() {
    let userData = localStorage.getItem('user');

    if (userData) {
      return this.user.next(JSON.parse(userData));
    } else {
      return this.user.next(null);
    }
  }

  async checkAuth() {
    try {
      let userData = localStorage.getItem('user');

      if (userData) {
        this.user.next(JSON.parse(userData));
        let token = JSON.parse(userData).token;

        await this.getProfile();
      } else {
        return this.user.next(null);
      }
    } catch (error) {
      console.log(error);
    }
  }

  getProfile() {
    let res = this.apiService.get<any>('auth/me').subscribe({
      next: (res) => {
        if (res.data) {
          this.userData.next(res.data);

          return this.router.navigate(['']);
        } else {
          this.user.next(null);
          this.userData.next(null);
          localStorage.clear();
          return this.router.navigate(['']);
        }
      },  // Handle transformed data
      error: (error) => {
        return { message: error }
      }
    });

    return res;
  }

  login(form: any) {
    this.apiService.post<any>('auth/login', form).subscribe({
      next: async (res) => {
        localStorage.setItem('user', JSON.stringify(res));
        
        this.user.next(res!);
        
        return await this.getProfile();
      },  // Handle transformed data
      error: (error) => {
        this.error.next(error);
        return { message: error }
      }
    });
  }

  signup(form: any) {
    this.apiService.post<any>('auth/signup', form).subscribe({
      next: async (res) => {
        // in case of token in response
        localStorage.setItem('user', JSON.stringify(res));
        this.user.next(res!);

        return await this.getProfile();
      },  // Handle transformed data
      error: (error) => {
        this.error.next(error);
        return { message: error }
      }
    });
  }

  logout() {
    this.user.next(null);
    this.userData.next(null);
    localStorage.clear();
    this.router.navigate(['']);
  }
}
