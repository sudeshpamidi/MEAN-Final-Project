import { Component, OnInit } from '@angular/core';
import { UsersService }  from '../services/users.service';
import {Users} from '../models/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userlist: Users[] = [];
  
  constructor(private usersService : UsersService) { }

  ngOnInit() {
     this.usersService.getUsers().subscribe(data => {
        this.userlist = data;
  });

  }

}
