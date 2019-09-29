import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Routes, RouterModule }  from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

//services
import { AuthService }  from './services/auth.service';

// import { UsersService }  from './services/users.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent },  
  {path: 'leagues', component: LeaguesComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'users', component: UsersComponent },
  {path: 'login', component: LoginComponent}
  // {path: 'logout', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LeaguesComponent,
    NavbarComponent,
    RegisterComponent,
    SidebarComponent,
    FooterComponent,
    UsersComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
