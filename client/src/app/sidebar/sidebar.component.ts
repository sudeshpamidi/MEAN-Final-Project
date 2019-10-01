import { Component, OnInit } from '@angular/core';
import { AuthService }  from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  
  constructor(private authService : AuthService,
              private router: Router) { }
  
  isAuthenticated :boolean =  this.authService.isAuth;
  isAdmin : boolean = this.authService.isAdmin ;
  
  getAuth() : boolean {
      this.isAuthenticated = this.authService.isAuth
      return  this.isAuthenticated;    
    }
  
  getAdmin(): boolean{
    this.isAdmin = this.authService.isAdmin
    return  this.isAdmin;    
  }

  ngOnInit() {  }
  
  logout(){    
    
    this.authService.isAuth = false;
    this.authService.isAdmin = false;
    this.isAuthenticated = this.authService.isAuth;
    this.isAdmin = this.authService.isAdmin;

    // this.authService.logout()
    //     .subscribe(data=>{     });
  
    this.router.navigate (['login'])                  
  }
}
