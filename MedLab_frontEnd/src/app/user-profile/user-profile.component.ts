import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { TestType } from '../classes/TestType';
import { TestData } from '../classes/test-details';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  testSet :TestType[] = TestData;
  isLinear = false;
  
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    console.log(this.testSet[0].tests[0].name);
  }
  

}
