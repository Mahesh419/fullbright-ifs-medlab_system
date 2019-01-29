import { Component, OnInit } from '@angular/core';
import { TestReportData } from '../classes/report/test-report-data';
import { TestReportDummyData} from '../classes/test-details';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
   
  private reportData = this.getReportDetails();
  constructor() { }

  ngOnInit() {
    
  }

  getReportDetails(){
    return TestReportDummyData;
  }
  onSubmit(){
    
  }

}
