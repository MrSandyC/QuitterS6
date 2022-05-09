import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-follower',
  templateUrl: './follower.component.html',
  styleUrls: ['./follower.component.css'],
})
export class FollowerComponent implements OnInit {
  username!: string;
  constructor(private route: ActivatedRoute) {
    this.username = this.route.snapshot.params['username'];
    console.log(this.route.snapshot.params['username']);
  }

  ngOnInit(): void {}
}