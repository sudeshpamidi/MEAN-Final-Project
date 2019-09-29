import { Component, OnInit } from '@angular/core';
import { AuthService }  from '../services/auth.service';
import { LeaguesService }  from '../services/leagues.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {
  
 
  constructor(private authService : AuthService,
    private leaguesService: LeaguesService,
    private router: Router) { }

  isAuthenticated : boolean = false;
  leagues = [];

  ngOnInit() {
    this.isAuthenticated =this.getAuth() 
    console.log ('Authenticated : ' + this.isAuthenticated);
    console.log ('authService : ' + this.authService.isAuth);    

    // if (!this.getAuth())
    // {
    //   this.router.navigate (['login']);
    // }else{
      this.getLeagues();
    // }
  }

  getAuth() : boolean {
    //this.isAuthenticated = this.authService.isAuth
    return  this.authService.isAuth;    
  }


  getLeagues() :void {
    this.leaguesService.getLeagues().subscribe(data => {
      this.leagues = data;
    });
  }
}
