import { Component, OnInit } from '@angular/core';
import { AuthService }  from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService : AuthService,  private router: Router) { }

  userName : string ;
  passWord : string ;  
  errorMessage : string;

  ngOnInit() {
  }

  login(loginForm):void {
    if (loginForm.valid){
     this.authService.authenticate (this.userName, this.passWord )
         .subscribe(data => {
            if (data['error']){                            
              this.errorMessage = data['error'] ;              
            }
            else { this.router.navigate(['leagues']); }
        });
    }
  }

}
