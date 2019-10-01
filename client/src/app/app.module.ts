import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import { TeamComponent } from './team/team.component';
import { ContactsComponent } from './contacts/contacts.component';

//import { TeamsService }  from './services/teams.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent },  
  {path: 'leagues', component: LeaguesComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'users', component: UsersComponent },
  {path: 'user', component: UserComponent },
  {path: 'login', component: LoginComponent},  
  {path: 'teams', component: TeamsComponent},
  {path: 'team', component: TeamComponent},
  {path: 'contacts', component: ContactsComponent }
  //{path: 'logout', component: ContactsComponent }
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
    TeamsComponent,
    TeamComponent,
    ContactsComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  entryComponents: [TeamComponent]
})
export class AppModule { }
