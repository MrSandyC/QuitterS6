import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FollowService } from 'src/app/services/follow.service';

@Component({
  selector: 'app-follower',
  templateUrl: './follower.component.html',
  styleUrls: ['./follower.component.css'],
})
export class FollowerComponent implements OnInit {
  username!: string;
  user!: any;
  constructor(private route: ActivatedRoute, private followService : FollowService) {
    this.username = this.route.snapshot.params['username'];
    console.log(this.route.snapshot.params['username']);
    this.followService.fetchFollowers(this.username).pipe().subscribe((val) => {
      if(val) {
        this.user = val;
      }
    })
  }

  ngOnInit(): void {
    // to be filled with content
  }
}