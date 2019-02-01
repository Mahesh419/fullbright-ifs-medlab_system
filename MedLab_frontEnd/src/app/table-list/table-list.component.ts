import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TestReportData } from '../classes/report/test-report-data';
import { TestReportDummyData} from '../classes/test-details';
import { Observable } from 'rxjs';
import { ReportReadService } from '../service/report-read.service';
import { asPureExpressionData } from '@angular/core/src/view';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  
  public formId:FormGroup;
  public date :Date;
  public recordDataRecieved:TestReportData;
  public downloadStatus:boolean;
  constructor(private repoData: ReportReadService,private fb:FormBuilder) { }

  @ViewChild('content') content:ElementRef;
  @ViewChild('tablepdf') tablepdf :ElementRef;
  ngOnInit() {
    this.formId = this.fb.group({
      recieptID:[''],
    })
    this.date = new Date();
  }
  public downloadPDF(){
    // return xepOnline.Formatter.Format('content',{render:'download'})
    // return xepOnline.Formatter.Format('tablepdf');

    let doc = new jsPDF();

    let elementHandlers = {
      '#editor':function(element ,renderer){
        return true;
      }
    };
    let content = this.content.nativeElement;

    doc.fromHTML(content.innerHTML,15,15,{
      'width':190,
      'elementHandlers':elementHandlers,
    })
    // doc.text( xepOnline.Formatter.Format('tablepdf'),100,100);
    

    doc.save('report.pdf');
  }
  getGender(){
    return ((this.recordDataRecieved.gender = this.recordDataRecieved.gender.toLocaleUpperCase()) == "MALE")?"Mr.":"Mrs.";
  }

  searchReciept(){
      this.repoData.getDataReport(this.formId.value.recieptID).subscribe(
        data=>{
          this.recordDataRecieved = data;
          if(this.recordDataRecieved.testList[0].testStatus){
            this.downloadStatus = true;
          }else{
            this.downloadStatus = false;
          }
          

        },
        error =>{
          this.recordDataRecieved = null;
          this.downloadStatus = false;
        }
      )
  }

}
