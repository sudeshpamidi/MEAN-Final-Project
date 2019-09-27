import { Component, OnInit } from '@angular/core';

//import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  constructor() { }  
  currentYear = 2019;

  //getting current year
  getCurrentYear():number {
    return this.currentYear;
  }

  ngOnInit() {
  }
  
}

