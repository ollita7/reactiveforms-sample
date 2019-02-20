import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.less']
})
export class Login2Component implements OnInit {

  loginForm = new FormGroup({
    mail: new FormControl(''),
    password: new FormControl('')
  });
  constructor() { }

  ngOnInit() {
  }

}
