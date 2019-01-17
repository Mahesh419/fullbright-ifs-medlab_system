import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private passwordField:string = "password";
  private iconPassword:string = "visibility";

  constructor() { }

  ngOnInit() {
  }

  passwordFieldToggle(){
    this.iconPassword = (this.iconPassword==="visibility")?"visibility_off":"visibility";
    this.passwordField = (this.passwordField ==="password")?"text":"password";
  }

}
