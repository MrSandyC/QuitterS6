import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.css']
})
export class TermsConditionsComponent implements OnInit {
  number: number;
  constructor() {
    this.number = 1
   }

  ngOnInit(): void {
    this.number = 2;
  }

}
