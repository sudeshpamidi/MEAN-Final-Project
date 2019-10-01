import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, Subject, of} from 'rxjs';
import { map } from 'rxjs/operators';
import {Users} from '../models/users';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private _isAuth: boolean = false;
  private _isAdmin: boolean = false;
  private _user:Users;

  get isAuth(): boolean {
      return this._isAuth;
  }
  set isAuth(value: boolean) {
      this._isAuth = value;
  }

  get isAdmin(): boolean {
      return this._isAdmin;
  } 
  set isAdmin(value: boolean) {
    this._isAdmin = value;
  }

  get user() : Users {
    return this._user ;
  }
  set user(value : Users)  {
    this._user = value;
  }

  private url: string = 'http://localhost:3000/users/login/';
	private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http : HttpClient) { }    
  authenticate(username: string , password : string): Observable<any> {

    return this.http.post(this.url, {username : username, password : password } , this.httpOptions)
            .pipe(map(res => <any>res));    
  }

  logout(): Observable<any> {
    let _url: string = 'http://localhost:3000/logout/';
    return this.http.get(_url, this.httpOptions)
            .pipe(map(res => <any>res));    
  }
}
