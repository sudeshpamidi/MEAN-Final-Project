import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
//import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  constructor(private router: Router) { }  
  currentYear = 2019;

  //getting current year
  getCurrentYear():number {
    return this.currentYear;
  }

  ngOnInit() {
  }
  
  logout(){    
    this.router.navigate (['login'])            
  }
}

