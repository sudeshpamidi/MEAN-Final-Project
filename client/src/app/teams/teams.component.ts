import { Component, OnInit , ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import { TeamService }  from '../services/team.service';
import { AuthService }  from '../services/auth.service';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog,MatDialogConfig} from '@angular/material';
import { TeamComponent } from '../team/team.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

 const ELEMENT_DATA = [];

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})

 export class TeamsComponent implements OnInit {

  constructor(private teamService : TeamService,
    private authService : AuthService,
    private router : Router,
    private dialog : MatDialog
    ) {}
  
  @ViewChild(MatSort, {static: false}) sort: MatSort;    
  teams: MatTableDataSource<any> ;
  displayedColumns: string[] = ['teamname','maxteammembers',  'minage', 'maxage','managername','managerphone', 'action'];
  dataSource =new MatTableDataSource(ELEMENT_DATA) ;


  isAuthenticated : boolean = false;

  ngOnInit() {
     
   this.isAuthenticated =this.getAuth() 

    if (!this.getAuth())
    {
       this.router.navigate (['login']);
     }else{
      this.getTeams();
     }
  }
  getTeams() :void {
    this.teamService.getUsers().subscribe(data => {      
      this.dataSource = data;      
      this.teams = data;      
      this.dataSource.sort = this.sort;
    });
  }
  getAuth() : boolean {
    //this.isAuthenticated = this.authService.isAuth
    return  this.authService.isAuth;    
  }

  openTeamModel(row ){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width= "80%";
    dialogConfig.data = row ;//{dialogTitle: "title", dialogText: "text"};
  
    this.dialog.open(TeamComponent,dialogConfig);
  }
  onCreate(row){
    this.openTeamModel(row);
  }

  onEdit( row){
    this.openTeamModel(row );
  }
  onClose(){
    this.dialog.closeAll()    
  }
}
