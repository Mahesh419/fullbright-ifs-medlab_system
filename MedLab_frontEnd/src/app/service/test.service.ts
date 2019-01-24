import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestType } from '../classes/TestType';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private urlTest:string = 'path/api/testprofile/all'
  constructor(private http:HttpClient) { }

  getTestProfile():Observable<TestType[]>{
    return this.http.get<TestType[]>(this.urlTest);
  }
}
