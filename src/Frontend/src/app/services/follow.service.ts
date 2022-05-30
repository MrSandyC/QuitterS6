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
      httpOptions.headers.set('Authorization', `Bearer ${claims?.__raw}`);
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
    return this.httpClient.get<any>(`${baseUrl}/followers`, { params: { username: username } });
  }

  fetchFollowing(username: string) {
    return this.httpClient.get<any>(`${baseUrl}/following`, { params: { username: username } });
  }
}
