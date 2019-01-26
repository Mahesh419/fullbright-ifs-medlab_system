import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { TestType } from '../classes/TestType';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Receipt } from '../classes/receipt';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private urlTest:string = 'path/api/testprofile/all';
  private testReciptlUrl :string = 'path/api/testprofile/total';
  private locationURL:string = 'path/api/location';
  private recieptGeneratorURL = 'path/api/receipt/new';
  constructor(private http:HttpClient) { }

  getTestProfile():Observable<TestType[]>{
    return this.http.get<TestType[]>(this.urlTest);
  }

  
  getLocation():Observable<Location[]>{
    return this.http.get<Location[]>(this.locationURL)
          .catch(this.handleError);
  }

  getReciept():Observable<Receipt>{
    return this.http.get<Receipt>(this.recieptGeneratorURL)
          .catch(this.handleError);
  }

  private handleError(error: HttpErrorResponse) {
    return Observable.throw(error.message);
  }

}
