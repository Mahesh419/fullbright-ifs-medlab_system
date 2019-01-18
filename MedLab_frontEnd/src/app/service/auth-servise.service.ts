import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ValidateUser } from '../classes/validate-user';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url:string = '/assets/post/post.json';
  constructor(private http :HttpClient) { }

  public loginUser(userInfo:User):Observable<ValidateUser>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
      return this.http.post<ValidateUser>(this.url,userInfo,httpOptions);
  }

  public isAuthenticated(input:boolean):boolean{
    return input;
  }
}
