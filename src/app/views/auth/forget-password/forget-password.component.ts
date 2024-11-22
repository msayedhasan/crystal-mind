import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';
import { Subject, Subscription } from 'rxjs';
import { User } from '../user.model';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
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

    // await this.authService.forgetPassword(form);

    this.spinner.hide();
  }
}
