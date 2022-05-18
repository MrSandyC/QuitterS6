import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService, User } from '@auth0/auth0-angular';
import { first } from 'rxjs';
import { Queet } from 'src/app/models/queet';
import { QueetService } from 'src/app/services/queet.service';

@Component({
  selector: 'app-new-queet',
  templateUrl: './new-queet.component.html',
  styleUrls: ['./new-queet.component.css'],
})
export class NewQueetComponent implements OnInit {
  profileJson: string = '';
  value: number = 0;
  form!: FormGroup;

  @Input('user') user: User = {};
  constructor(
    public auth: AuthService,
    private formBuilder: FormBuilder,
    public queetService: QueetService
  ) {}

  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile) => (this.profileJson = JSON.stringify(profile, null, 2))
    );
    this.initializeForm();
  }

  initializeForm(): void {
    this.form = this.formBuilder.group({
      message: '',
    });
  }

  calculateValue(event: any): void {
    const max = 144;
    const inputLength = event.target.value.length;
    this.value = (inputLength / max) * 100;
  }

  submitQueet() {
    console.log(this.user);
    console.log(this.form.value.message);
    let queet: Queet = new Queet();
    queet.message = this.form.value.message;
    queet.user = this.user;
    this.queetService
      .postQueet(queet)
      .pipe(first())
      .subscribe((val) => console.log(val));
  }
}
