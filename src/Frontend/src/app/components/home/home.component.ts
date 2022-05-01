import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from '@auth0/auth0-angular';
import { Queet } from 'src/app/models/queet';
import { QueetService } from 'src/app/services/queet.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  auth0Token: string = '';
  queets!: Queet[];
  user!: User;
  constructor(
    public auth: AuthService,
    public userService: UserService,
    private route: Router,
    public queetService: QueetService
  ) {
    this.auth.user$.subscribe((user) => {
      this.auth0Token = user!.sub!;
      this.userService
        .fetchUserByToken(user!.sub!)
        .pipe()
        .subscribe((val) => {
          if (!val) {
            this.route.navigate(['/register']);
          } else {
            this.user = val;
          }
        });
    });
    this.queetService
      .fetchQueets()
      .pipe()
      .subscribe((queets) => (this.queets = queets));
  }

  ngOnInit(): void {
    console.log(this.auth0Token);
  }
}
