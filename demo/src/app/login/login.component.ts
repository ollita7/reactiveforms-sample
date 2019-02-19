import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    mail: ['test@dfaslf', Validators.required],
    password: ['', Validators.required ]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() { }

}
