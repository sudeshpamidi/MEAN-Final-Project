import { Component, OnInit } from '@angular/core';
import { Users } from '../models/users';
import { UsersService }  from '../services/users.service';
import { Router, ActivatedRoute  } from '@angular/router';
import { AuthService }  from '../services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  usersModel : Users = new Users(0,"", "","","","",false ); 
  errorMessage : string ;
  confirmPassword: string;
  userId : number;
  authUser : Users

  constructor(private usersService : UsersService, 
     private authService : AuthService ,
     private router : Router) { }

  ngOnInit() {
     if (!this.getAuth())
     {
        this.router.navigate (['login']);
      }else{      
       this.getUser();
      }      
  }

  /**
   * get user details  
   * 
   * */
  getUser():void {  
      this.usersService.getUser(this.getAuthUser().id).subscribe(data=> {
        this.userId = data["id"];
        this.usersModel = new Users(data["id"], data["USER_NAME"], 
        data["FIRST_NAME"],data["LAST_NAME"],data["EMAIL"],data["PASSWORD"],data["IS_ADMIN"]);
       });
  }
  /**
   * update the user - only email is allowed to update.
   */
  updateUser():void{
     this.usersService.updateUser(this.userId, this.usersModel).subscribe(
       data => {
         this.errorMessage = "User " + this.usersModel.firstname + ' ' + this.usersModel.lastname + ' has been updated.'
       },
       error =>{ console.log ( error.statusText)
         this.errorMessage = error.statusText;
       }
     );
  }

  /**
   * Get authenticated user to maitain the session.
   */ 
  getAuthUser() : Users{
     this.authUser = this.authService.user;
     return this.authUser;
  }
  /**
   * get authentication status
   */
  getAuth() : boolean {    
    return  this.authService.isAuth;    
  }
}
