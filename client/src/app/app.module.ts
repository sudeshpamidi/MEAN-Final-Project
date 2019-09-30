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
import {MaterialModule} from './material/material.module';
//services
import { AuthService }  from './services/auth.service';
import { UserComponent } from './user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeamsComponent } from './teams/teams.component';

// import { UsersService }  from './services/users.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent },  
  {path: 'leagues', component: LeaguesComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'users', component: UsersComponent },
  {path: 'user', component: UserComponent },
  {path: 'login', component: LoginComponent},
  {path: 'teams', component: TeamsComponent}
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
    HomeComponent,
    UserComponent,
    TeamsComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
