import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  accountForm!: FormGroup;
  optionalForm!: FormGroup;
  auth0token!: string;
  profileUri!: string;
  constructor(
    private _formBuilder: FormBuilder,
    private auth: AuthService,
    public userService: UserService,
    private route: Router
  ) {
    this.auth.user$.subscribe(
      (user) => (
        (this.auth0token = user!.sub!), (this.profileUri = user!.picture!)
      )
    );
  }

  ngOnInit(): void {
    this.accountForm = this._formBuilder.group({
      username: ['', Validators.required],
      nickname: ['', Validators.required],
    });
    this.optionalForm = this._formBuilder.group({
      description: ['', Validators.required],
      location: [''],
    });
  }

  submitUserInformation(): void {
    if (
      this.accountForm.value.username === '' ||
      this.accountForm.value.nickname === ''
    ) {
      console.log('Need to add more information');
    } else {
      console.log('got here');
      const user: User = {
        username: this.accountForm.value.username,
        nickname: this.accountForm.value.nickname,
        description: this.optionalForm.value.description,
        location: this.optionalForm.value.location,
        auth0id: this.auth0token,
        profileUri: this.profileUri,
      };
      this.userService
        .register(user)
        .subscribe((succes) => this.route.navigate(['/home']));
    }
  }
}
