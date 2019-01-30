import { Component, OnInit } from '@angular/core';
import { TestReportData } from '../classes/report/test-report-data';
import { TestReportDummyData} from '../classes/test-details';
import { Observable } from 'rxjs';
import { ReportReadService } from '../service/report-read.service';
import { asPureExpressionData } from '@angular/core/src/view';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  
  private formId:FormGroup;
  private date :Date;
  private recordDataRecieved:TestReportData;
  constructor(private repoData: ReportReadService,private fb:FormBuilder) { }

  ngOnInit() {
    this.formId = this.fb.group({
      recieptID:[''],
    })
    this.date = new Date();
  }
  getGender(){
    return ((this.recordDataRecieved.gender = this.recordDataRecieved.gender.toLocaleUpperCase()) == "MALE")?"Mr.":"Mrs.";
  }

  searchReciept(){
      this.repoData.getDataReport(this.formId.value.recieptID).subscribe(
        data=>{
          this.recordDataRecieved = data;
        },
        error =>{
          this.recordDataRecieved = null;
        }
      )
  }

}
