import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';

const baseUrl = `${environment.apiURL}/follow`;
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class FollowService {
  token!: any;
  constructor(private httpClient: HttpClient, private auth: AuthService) {
    this.auth.idTokenClaims$.subscribe((claims) => {
      console.log(claims?.__raw);
      this.token = claims?.__raw;
      httpOptions.headers.set('Authorization', `Bearer ${claims?.__raw}`);
    });
  }

  followUser(followerId: number, followingId: number) {
    return this.httpClient.post<any>(
      baseUrl,
      { follower: followerId, following: followerId },
      httpOptions
    );
  }
}
