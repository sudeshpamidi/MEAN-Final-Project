import { Component, OnInit } from '@angular/core';
import { UsersService }  from '../services/users.service';
import {Users} from '../models/users';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userlist: Users[] = [];
  errorMessage: string;

  constructor(private usersService : UsersService, private router:Router ) { }

  ngOnInit() {
    this.getUsers();
  }
  
  getUsers() :void {
    this.usersService.getUsers().subscribe(data => {
      this.userlist = data;})
  }
  
  deleteUser(id): void {
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
}
