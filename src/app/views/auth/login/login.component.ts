import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';

import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  errorSub!: Subscription;
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private authService: AuthService
  ) {}
  form = this.fb.group({
    name: ['', [Validators.required]],
    password: ['', Validators.required],
  });

  ngOnInit() {
    this.errorSub = this.authService.error.subscribe((err: any) => {
      this.toastr.error(err, 'Error');
    });
  }

  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }
  async onSubmit(form: any) {
    this.spinner.show();

    await this.authService.login(form);

    this.spinner.hide();
  }
}
