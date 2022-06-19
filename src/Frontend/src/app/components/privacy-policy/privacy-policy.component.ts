import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {
  number: number
  constructor() {
    this.number = 1
   }

  ngOnInit(): void {
    this.number = 2;
  }

}
