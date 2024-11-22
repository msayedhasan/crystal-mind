import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { AuthService } from './auth/auth.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestsService {
  error = new Subject<String>();

  constructor(private apiService: ApiService,private authService : AuthService) { }

  saveTest(form: any) {
    this.apiService.put<any>('test', form).subscribe({
      next: async (res) => {
        return await this.authService.getProfile();
      },  // Handle transformed data
      error: (error) => {
        this.error.next(error);
        return { message: error }
      }
    });
  }
}
