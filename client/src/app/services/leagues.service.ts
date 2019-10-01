import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, Subject, of} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaguesService {
  private urlEndpoint: string = 'http://localhost:3000/leagues/';
	private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http : HttpClient ) { }

  getLeagues (): Observable<any> {  
    return this.http.get(this.urlEndpoint, this.httpOptions)
            .pipe(map(res => <any>res));    
  }  
}
