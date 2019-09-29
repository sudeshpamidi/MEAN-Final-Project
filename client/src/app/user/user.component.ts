import { Component, OnInit } from '@angular/core';
import { Users } from '../models/users';
import { UsersService }  from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  usersModel = new Users("", "","","","",false );
  errorMessage : string ;
  confirmPassword: string;
  userId : number;

  constructor(private usersService : UsersService, 
    private router : Router) { }

  ngOnInit() {       
    this. getUser();
  }
  


  getUser():void {
    this.usersService.getUser(1).subscribe(data=> {
      this.userId = data["id"];
      this.usersModel = new Users(data["USER_NAME"], 
      data["FIRST_NAME"],data["LAST_NAME"],data["EMAIL"],data["PASSWORD"],data["IS_ADMIN"]);
     });
  }
  updateUser():void{
    console.log (this.usersModel );
    console.log ("User Id " + this.userId);
    this.usersService.updateUser(this.userId, this.usersModel).subscribe(
      data => {
        this.errorMessage = "User " + this.usersModel.firstname + ' ' + this.usersModel.lastname + ' has been updated.'
      },
      error =>{ console.log ( error.statusText)
        this.errorMessage = error.statusText;
      }
    );
  }
}
