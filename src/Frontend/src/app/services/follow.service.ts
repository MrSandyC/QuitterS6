import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';

const baseUrl = `${environment.apiURL}/follow`;

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
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
    return this.httpClient.post<any>(
      baseUrl,
      { follower: followerId, following: followingId },
      {headers: headers}
    );
  }

  fetchFollowers(userId: number) {
    return this.httpClient.get<any>(`${baseUrl}/followers`, { params: { id: userId } });
  }

  fetchFollowing(userId: number) {
    return this.httpClient.get<any>(`${baseUrl}/following`, { params: { id: userId } });
  }
}
