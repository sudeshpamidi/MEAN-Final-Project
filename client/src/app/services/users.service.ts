import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, Subject, of} from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private urlEndpoint: string = 'http://localhost:3000/users/';
	private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http : HttpClient ) { }

  getUsers (): Observable<any> {
  
    return this.http.get(this.urlEndpoint, this.httpOptions)
            .pipe(map(res => <any>res));    
  }
  
  registerUser (user : any): Observable<any> {
    let url  = this.urlEndpoint + "register"
    return this.http.post(url, user, this.httpOptions)
            .pipe(map(res => <any>res));    
  }
  

}
