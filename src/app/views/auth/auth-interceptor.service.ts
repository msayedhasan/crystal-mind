import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpParams,
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { take, exhaustMap, map, finalize } from 'rxjs/operators';

import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private spinner: NgxSpinnerService
  ) {}

  timer: any;
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.authService.user.pipe(
      take(1),
      map((user) => {
        // console.log(`user token map interceptor ${user.token}`);
        return user;
      }),
      exhaustMap((user) => {
        // console.log(`user token exhaustmap interceptor ${user.token}`);
        if (!user) {
          return next.handle(req);
        }
        const modifiedReq = req.clone({
          setHeaders: {
            Authorization: `Bearer ${user.token}`,
          },
          // withCredentials: true,
          headers: req.headers.set('Authorization', `${user.token}`),
        });

        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => this.spinner.show(), 500);

        return next.handle(modifiedReq).pipe(
          finalize(() => {
            this.spinner.hide();
            if (this.timer) {
              clearTimeout(this.timer);
            }
          })
        );
      })
    );
  }
}
