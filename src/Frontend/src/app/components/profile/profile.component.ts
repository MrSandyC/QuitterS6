import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, User } from '@auth0/auth0-angular';
import { first } from 'rxjs';
import { Queet } from 'src/app/models/queet';
import { QueetService } from 'src/app/services/queet.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profileJson: string = '';
  queets!: Queet[];
  user!: User;
  authUser!: unknown;
  constructor(
    public auth: AuthService,
    public queetService: QueetService,
    private route: ActivatedRoute,
    private router: Router,
    public userService: UserService
  ) {
    this.auth.user$.subscribe((profile) => (this.authUser = profile!.sub!));
    this.userService
      .fetchUserByUsername(this.route.snapshot.params['username'])
      .pipe(first())
      .subscribe((val) => {
        this.user = val;
        this.queetService
          .fetchQueetsByUserId(this.user['id'])
          .pipe(first())
          .subscribe((val) => (this.queets = val));
      });
  }

  async ngOnInit(): Promise<void> {
    // await this.queetService
    //   .fetchQueetsByUserId(this.user['id'])
    //   .pipe(first())
    //   .subscribe((val) => (this.queets = val));
    console.log(this.route.snapshot.params['username']);
  }

  followUser(): void {
    console.log('followed user');
  }

  redirectToEdit(): void {
    this.router.navigate(['/profile/edit']);
  }
}
