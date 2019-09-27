import { Component, OnInit } from '@angular/core';
import { AuthService }  from '../services/auth.service';
import { LeaguesService }  from '../services/leagues.service';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {
  
 
  constructor(private authService : AuthService,
    private leaguesService: LeaguesService) { }

  isAuthenticated : boolean=  this.authService.isAuth;

  leagues = [{NAME: "League",
              CODE: "Code",
              DESCRIPTION: "Desc"}];

  ngOnInit() {
    this.leaguesService.getLeagues().subscribe(data => {
      this.leagues = data;
    });
  }

}
