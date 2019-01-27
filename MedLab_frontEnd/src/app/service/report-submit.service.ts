import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { TestReport } from '../classes/TestReport';

@Injectable({
  providedIn: 'root'
})
export class ReportSubmitService {
  private reportURL:string = 'path/api/form/report/';
  private dataSendURL =""
  constructor(private http:HttpClient) { }

  public getReport(specimanId:string):Observable<TestReport>{
    return this.http.get<TestReport>(this.reportURL + specimanId).catch(this.errorHandler); 
  }

  public sendComplteData(data){
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    return this.http.post(this.dataSendURL,data, httpOption).catch(this.errorHandler)
  }

  private errorHandler(error:HttpErrorResponse){
    return Observable.throw(error.message);
  }
}
