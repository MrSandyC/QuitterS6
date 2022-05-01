import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { first } from 'rxjs';
import { Queet } from 'src/app/models/queet';
import { QueetService } from 'src/app/services/queet.service';

@Component({
  selector: 'app-queets',
  templateUrl: './queets.component.html',
  styleUrls: ['./queets.component.css'],
})
export class QueetsComponent implements OnInit {

  @Input('queets') queets: Queet[] = []
  profileJson: string = '';
  constructor(public auth: AuthService, public queetService: QueetService) {}

  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile) => (this.profileJson = JSON.stringify(profile, null, 2))
    );
  }

  commentOnQueet() {
    const comment = prompt("What's your comment?");
    if (comment && comment.trim().length) {
      console.log(comment);
    }
  }

  likeQueet() {
    const liked = false;
    if (!liked) {
      console.log('Liked the queet');
    }
  }
}
