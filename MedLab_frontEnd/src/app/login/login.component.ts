import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'; 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private passwordField:string = "password";
  private iconPassword:string = "visibility";
  private login = this.fb.group({
    userName : ['',Validators.required],
    password:['',Validators.required],
  })
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }
  onSubmit(){
    
  }

  passwordFieldToggle(){
    this.iconPassword = (this.iconPassword==="visibility")?"visibility_off":"visibility";
    this.passwordField = (this.passwordField ==="password")?"text":"password";
  }

}
