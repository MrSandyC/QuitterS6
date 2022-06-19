import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { FollowService } from 'src/app/services/follow.service';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {
  username!: string;
  user!: User;
  constructor(private route: ActivatedRoute, private followService : FollowService) {
    this.username = this.route.snapshot.params['username'];
    console.log(this.route.snapshot.params['username']);
    this.followService.fetchFollowers(this.username).pipe().subscribe((val) => {
      if(val) {
        this.user = val;
        console.log(val)
      }
    })
  }

  ngOnInit(): void {
  }

}
