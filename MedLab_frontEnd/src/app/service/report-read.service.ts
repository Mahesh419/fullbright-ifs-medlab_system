import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs';
import { TestReportData } from '../classes/report/test-report-data';
@Injectable({
  providedIn: 'root'
})
export class ReportReadService {

  private finalReportURL = "path/api/form/report/view/"
  constructor(private http:HttpClient) { }

  getDataReport(recieptId):Observable<TestReportData>{
      return this.http.get<TestReportData>(this.finalReportURL+recieptId)
          .catch(this.errorHandler);
  }

  private errorHandler(error:HttpErrorResponse){
    return Observable.throw(error.message);
  }

}
