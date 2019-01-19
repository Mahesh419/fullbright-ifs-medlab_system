import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ValidateUser } from '../classes/validate-user';
import { User } from '../classes/user';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url:string = 'localhost:8080/medlab/user/verify';
  private user;
  constructor(private http :HttpClient) { }

  public loginUser(userInfo:User):Observable<ValidateUser>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token',
        'Access-Control-Allow-Origin':"*",
        
      })
    };
    return this.http.post<ValidateUser>(this.url,userInfo,httpOptions)
    .catch(this.errorHandler);

}

private errorHandler(error:HttpErrorResponse){
return Observable.throw(error);
}

  public isAuthenticated(input:boolean):boolean{
    this.user = localStorage.getItem('user');
    let userObj:ValidateUser;
    if(!this.user){
      return false;
    }else {
      userObj = this.user;
      if(!userObj.type){
        return false;
      }
      return true;
    }
    
  }
}
