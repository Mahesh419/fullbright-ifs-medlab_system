import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { TestType } from '../classes/TestType';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Receipt } from '../classes/reciept-id';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private urlTest:string = 'path/api/testprofile/all';
  private testReciptlUrl :string = 'path/api/testprofile/total';
  private locationURL:string = 'path/api/location'
  constructor(private http:HttpClient) { }

  getTestProfile():Observable<TestType[]>{
    return this.http.get<TestType[]>(this.urlTest);
  }

  sendSelectedTestDetail(testData:TestType[]):Observable<Receipt>{//send test data and recieve total and reciept
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json',
    //     'Authorization': 'test-api-data'
    //   })
    // };
    // return this.http.post<TestTotal>(this.testTtlUrl,testData,httpOptions)
    //         .catch(this.handleError);
    return this.http.get<Receipt>(this.testReciptlUrl)
            .catch(this.handleError);
  }
  getLocation():Observable<Location[]>{
    return this.http.get<Location[]>(this.locationURL)
          .catch(this.handleError);
  }

  private handleError(error: HttpErrorResponse) {
    return Observable.throw(error.message);
  }

}
