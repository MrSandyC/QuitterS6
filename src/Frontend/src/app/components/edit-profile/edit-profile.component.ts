import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { first } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  profileForm!: FormGroup;
  user!: User;
  initialUser!: User;
  constructor(
    public auth: AuthService,
    public userService: UserService,
    private router: Router,
    private _formBuilder: FormBuilder
  ) {
    this.auth.user$.subscribe((auth0User) =>
      this.userService
        .fetchUserByToken(auth0User!.sub!)
        .pipe(first())
        .subscribe((fetchedUser) => {
          this.user = fetchedUser;
          this._formBuilder.group({
            username: [fetchedUser.username],
            nickname: [fetchedUser.nickname],
            description: [fetchedUser.description],
            location: [fetchedUser.location],
          });
          console.log(fetchedUser);
        })
    );
  }

  ngOnInit(): void {
    this.initialUser = this.user;
    console.log(this.user);
    this.profileForm = this._formBuilder.group({
      username: [''],
      nickname: [''],
      description: [''],
      location: [''],
    });
  }

  editProfile() {
    if (this.profileForm.value.nickname !== '') {
      this.user.nickname = this.profileForm.value.nickname;
    }
    if (this.profileForm.value.description !== '') {
      this.user.description = this.profileForm.value.description;
    }
    if (this.profileForm.value.location !== '') {
      this.user.location = this.profileForm.value.location;
    }

    if (this.user === this.initialUser) {
      console.log('No changes found');
    }
    console.log(this.user);
    this.userService
      .updateUser(this.user)
      .subscribe(async (result) => await this.router.navigate([`${this.user.username}`]));
  }
}
