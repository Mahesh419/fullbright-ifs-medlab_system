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

  private url:string = '/api/medlab/user/verify';
  private user:ValidateUser;
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
    return Observable.throw(error.message);
}

  public isAuthenticated():boolean{
    this.user = JSON.parse(localStorage.getItem('user'));
    if(!this.user){
      return false;
    }else {
      console.log(this.user);
      if(this.user.userId!=0){
        return false;
      }
      return true;
    }
    
  }
}
