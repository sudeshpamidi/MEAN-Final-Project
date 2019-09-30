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
  rememberMe : boolean = false;

ngOnInit() {
  // on page load
  if (this.localStorargeSupported() ) {
    var persistedData = localStorage.getItem('persistedData');

    if (persistedData !== null) {
      var parsedData = JSON.parse(persistedData);
      if (parsedData.rememberMe === true) {
          this.userName = parsedData.userName;
          this.rememberMe = parsedData.rememberMe;          
      }
    }
  }
}

login(loginForm):void {
    if (loginForm.valid){
    
      if (this.localStorargeSupported()) {      
        localStorage.setItem('persistedData', JSON.stringify({ "userName": this.userName, "rememberMe": this.rememberMe }));
      }
     this.authService.authenticate (this.userName, this.passWord )
         .subscribe(data => {
            if (data['error']){                            
              this.authService.isAuth = false;
              this.authService.isAdmin = false;
              this.errorMessage = data['error'] ;              
            }
            else { 
              this.authService.isAuth = true;              
              this.authService.isAdmin = data['IS_ADMIN'];
              this.router.navigate(['leagues']); }
        });
    }
}

  /**
   * Check whether browser local storage supports
   */
  localStorargeSupported() : boolean {
    if (typeof(Storage) !== "undefined") {
      return true;
    } else {
      return false;
    }
  }  
}
