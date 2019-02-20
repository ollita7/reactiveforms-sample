import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['']
  });
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
  }

}
