import { Component, OnInit } from '@angular/core';
import { AuthService }  from '../services/auth.service';
import {Router} from '@angular/router';
import {Users}  from '../models/users';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  isAuthenticated :boolean =  this.authService.isAuth;
  user : Users;

  constructor(private authService : AuthService,
              private router: Router) { }

      getAuth() : boolean {
        this.isAuthenticated = this.authService.isAuth
        return  this.isAuthenticated;    
      }
      
      getAuthUser() : Users{
        this.user = this.authService.user;
        return this.user;
      }

      
      ngOnInit() {    
      }
      
      logout(){    
        this.authService.isAuth = false;
        this.isAuthenticated = this.authService.isAuth;
        this.router.navigate (['login'])            
      }
}
