import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.less']
})
export class Login2Component implements OnInit {
  loginForm = new FormGroup({
    password: new FormControl('', Validators.required),
    passwordConfirmation: new FormControl('',
      [Validators.required, Validators.minLength(6), this.validateAreEqual.bind(this)])
  });
  submitted = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  get f() { return this.loginForm.controls; }

  private validateAreEqual(fieldControl: FormControl) {
    if (this.loginForm === undefined) {
      return null;
    }
    return fieldControl.value === this.loginForm.get('password').value ? null : {  NotEqual: true };
  }

  onSubmit() {
    this.submitted = true;
  }

}
