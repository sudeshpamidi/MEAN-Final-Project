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
  
  /**
   *  Deletes the user and refreshed the data.
   */
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

  /**
   * Supporting function to refresh the data
   */
  reloadUsers() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['users']);
  }  
  
  getAuth() : boolean {    
    return  this.authService.isAuth;    
  }
}
