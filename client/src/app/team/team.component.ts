import { Component,OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})

export class TeamComponent implements OnInit {
  counts = [1,2,3,4,5];
  
  teamName : string = "USA";

  constructor(public dialogRef : MatDialogRef<TeamComponent> ){}
  ngOnInit(  ){
    this.teamName = "USA";
  }
  onSave(){
    // future enhancement
  }

}
