import { Component } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { User } from '../user.model';
import { FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent {
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
    password: ['', Validators.required],
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

  // await this.authService.newPassword(form);

    this.spinner.hide();
  }
}
