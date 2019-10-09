import { Component,OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {Team} from '../models/team';
import {MAT_DIALOG_DATA} from '@angular/material';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})

export class TeamComponent implements OnInit {
  counts = [1,2,3,4,5];
  
  
  team : Team;
  teamName : string = "USA";
  managerName : string ;
  managerEmail : string ;
  
  constructor(public dialogRef : MatDialogRef<TeamComponent> , @Inject(MAT_DIALOG_DATA) public data: any){}
  ngOnInit(  ){
    this.teamName = this.data.TEAM_NAME;
    //this.team= new  Team ( this.data.LEGUE_ID,this.data.MANAGER_EMAIL,)
    this.managerEmail = this.data.MANAGER_EMAIL;
    this.managerName = this.data.MANAGER_NAME;
    
    console.log (this.data);
  }
  onSave(){
    // future enhancement
    alert (this.teamName)
    this.dialogRef.close()
  }
  onCancel(){
    this.dialogRef.close()
  }


}
