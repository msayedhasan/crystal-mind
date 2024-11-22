import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';

import { ToastrService } from 'ngx-toastr';

import { Subject, Subscription } from 'rxjs';
import { User } from '../user.model';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
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
    name: ['', [Validators.required,Validators.minLength(4)]],
    phone: ['', [Validators.required, Validators.minLength(11)]],
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
  // onSubmit(form: AuthModel) {
  async onSubmit(form: any) {
    this.isLoading = true;

    this.spinner.show();

    await this.authService.signup(form);

    this.spinner.hide();
  }
}
