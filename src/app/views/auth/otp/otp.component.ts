import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';

import { ToastrService } from 'ngx-toastr';

import { Subject, Subscription } from 'rxjs';
import { User } from '../user.model';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent {
  error = null;
  isLoading = false;
  user = new Subject<User>();
  errorSub!: Subscription;
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private authService: AuthService,
    private spinner: NgxSpinnerService,
  ) { }
  form = this.fb.group({
    phone: ['', Validators.required],
    otp: ['', Validators.required],
  });
  ngOnInit() {
    this.errorSub = this.authService.error.subscribe((err: any) => {
      this.toastr.error(err, 'Error');
    });
  }
  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }
  // onSubmit(form: AuthModel) {
  async onSubmit(form: any) {
    this.isLoading = true;

    this.spinner.show();

    // await this.authService.verifyOtp(form);

    this.spinner.hide();
  }
}
