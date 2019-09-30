import { Component, OnInit } from '@angular/core';
import { Users } from '../models/users';
import { UsersService }  from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  usersModel = new Users(0,"", "","","","",false );
  errorMessage : string ;
  confirmPassword: string;

  constructor(private usersService : UsersService, 
    private router : Router) { }

  ngOnInit() {       
  }
    
  registerUser():void {
    this.usersService.registerUser (this.usersModel)
    .subscribe(data => {        
        if (data['error']){                                      
          this.errorMessage = data['error'] ;              
        }
        else {           
          this.router.navigate(['login']); }
    },
    error => this.errorMessage = error.statusText
    );
  }
}
