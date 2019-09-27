import { Component, OnInit } from '@angular/core';
import { AuthService }  from '../services/auth.service';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {
  
 
  constructor(private authService : AuthService) { }
  isAuthenticated : boolean=  this.authService.isAuth;

  ngOnInit() {
    
  }

}
