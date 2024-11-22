import { AfterContentInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-patient-dialog',
  templateUrl: './patient-dialog.component.html',
  styleUrls: ['./patient-dialog.component.scss'],
})
export class PatientDialogComponent implements AfterContentInit {
  @Input() _age: string | undefined;
  @Input() _gender: string = 'male';

  @Input() formValue: any | undefined;

  @Output() updataPatientEvent = new EventEmitter();

  constructor(private fb: FormBuilder) {

  }
  ngAfterContentInit(): void {
    console.log(this.formValue);
    
    this.form.get('name')?.patchValue(this.formValue.name);
    this.form.get('phone')?.patchValue(this.formValue.phone);
    this.form.get('age')?.patchValue(this.formValue.age);
    this.form.get('gender')?.patchValue(this.formValue.gender);
    }
  form = this.fb.group({
    name: [''],
    phone: [''],
    age: [''],
    gender: [''],
  });

  textInputValue: string = '';
  onTextInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.textInputValue = inputElement.value.replace(
      /[^\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFFA-Za-z ]/g,
      ''
    );
    inputElement.value = this.textInputValue;
  }
  numberInputValue: string = ''; // Bind to the input field
  onNumberInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.numberInputValue = inputElement.value.replace(/[^0-9]/g, '');
    inputElement.value = this.numberInputValue;
  }

  updatePatient(formValue: any) {
    this.form.setValue(formValue);
    this._age = this.form.get('age')?.value!;
    this._gender = this.form.get('gender')?.value!;

    this.updataPatientEvent.emit(this.form.value);
  }
}
