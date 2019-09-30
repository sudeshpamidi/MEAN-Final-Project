import { Component, OnInit } from '@angular/core';
import { UsersService }  from '../services/users.service';
import {Users} from '../models/users';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userlist: Users[] = [];
  errorMessage: string;

  deleteUserId : number = 0;

  constructor(private usersService : UsersService, private router:Router,
    private authService :AuthService ) { }

  ngOnInit() {
    this.getUsers();
  }

  setDeleteuserId(id){
    this.deleteUserId = id;    
  }

  getUsers() :void {
    this.usersService.getUsers().subscribe(data => {
      this.userlist = data;})
  }
  
  deleteUser(): void {
    let id = this.deleteUserId;    
    // need to refactor 
      this.usersService.deleteUser(id).subscribe(
        data => {                 
         this.reloadUsers();         
        },
        error =>{
          this.reloadUsers();         
          console.error(error.statusText)
        });       
  }

  reloadUsers() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['users']);
  }  
  getAuth() : boolean {
    //this.isAuthenticated = this.authService.isAuth
    return  this.authService.isAuth;    
  }

}
