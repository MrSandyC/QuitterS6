import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

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
    });
  }

  followUser(followerId: number, followingId: number) {
    const body = {
      "follower": followerId,
      "following": followingId,
    }
    return this.httpClient.post<User>(
      baseUrl,
      body,
      httpOptions
    );
  }

  fetchFollowers(username: string) {
    const body = {
      username: username
    }
    return this.httpClient.post<any>(`${baseUrl}/followers`, body, httpOptions);
  }

  fetchFollowing(username: string) {
    const body = {
      username: username
    }
    return this.httpClient.post<any>(`${baseUrl}/following`, body, httpOptions);
  }
}
