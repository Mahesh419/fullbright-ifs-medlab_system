import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth-servise.service';
import { Router } from '@angular/router';
import { ReportSubmitService } from '../service/report-submit.service';
import { TestReport } from '../classes/TestReport';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Report } from '../classes/submit-report/report';

@Component({
  selector: 'app-lab-tester',
  templateUrl: './lab-tester.component.html',
  styleUrls: ['./lab-tester.component.scss']
})
export class LabTesterComponent implements OnInit {
  private testData = [
    {Test_name : "White Blood Test(WBC) count", unit:"billion cells/L"},
    {Test_name : "Red Blood Cell (RBC) count",  unit : "trillion cells/L"},
    {Test_name : "Platelets count",  unit:"billion/L"},
    {Test_name : "Hemoblibin" ,  unit:"grams/dL"},
    {Test_name : "Hemotocrite",  unit: "%percent"},
  ];

  public userName:string;
  public toggle:boolean;//dummy variable for testing purposes
  public testingReport:TestReport;
  public error:string;
  public speciman:FormGroup;
  public testDataForm:FormGroup;
  public items: FormArray;
  public completeStatus:Boolean  = false;
  public errorState:boolean = false;

  constructor(private auth:AuthService, private router:Router, private report: ReportSubmitService,
                private fb:FormBuilder) { }

  ngOnInit() {
    this.speciman = this.fb.group({
      specimanId:[''],
    });

    this.testDataForm = this.fb.group({
      reportId:[''],
      profileId:[''],
      testResultList:this.fb.array([]),
    })

    this.userName = this.auth.getUserName();
  }
  addFrom(){
    this.items = this.testDataForm.get('testResultList') as FormArray;
    this.items.push(this.getFormTest());
  }
  getTitle(){
    return 'Laboratory Management System';
  }
  signOut(){
    localStorage.removeItem('user');
    this.router.navigate(['login']);

  }
  stateUpdate(state:boolean){//Notification on/ aff
    this.completeStatus  = state;
    this.errorState = state;
  }
  searchFromSpecimen(){
    this.report.getReport(this.speciman.value.specimanId)
              .subscribe(
                (data:TestReport)=>{//add form list items
                  this.testingReport = data;
                  this.stateUpdate(false);

                  this.error = null;
                  const arr = <FormArray>this.testDataForm.controls.testResultList;
                  arr.controls = [];
                  this.testingReport.testList.forEach((test,index)=>{
                      this.addFrom();
                  })
                 
                },
                (error)=>{
                  this.error = error;
                  this.testingReport=null;
                  this.stateUpdate(false);
                }
              );
    
  }

  getFormTest():FormGroup{
    return this.fb.group({
      testId:[''],
      testValue:[''],
    })
  }

  onSubmit(){
    this.report.sendComplteData(this.testDataForm.value).subscribe(
      data=>{
        this.testingReport = null;
        this.completeStatus = true;
        console.log(data)
      },
      error=>{
        this.errorState = true;
        console.log(error);
      }
    )
    console.log(this.testDataForm.value);
  }
  trackByTestId(index:number,test:any){
    return test.testId;
  }
  clearFormArray = (formArray: FormArray) => {
    formArray = this.fb.array([]);
  }
}
