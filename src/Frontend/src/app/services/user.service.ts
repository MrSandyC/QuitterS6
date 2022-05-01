import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

const baseUrl = `${environment.apiURL}/user`;
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  fetchUsers() {
    return this.httpClient.get<User[]>(baseUrl);
  }

  register(user: User): Observable<User> {
    return this.httpClient.post<User>(baseUrl, user, httpOptions);
  }

  checkIfUserExists(auth0Token: string) {
    let params = new HttpParams().append('auth0token', auth0Token);
    return this.httpClient.get<boolean>(baseUrl, { params: params });
  }

  fetchUserByToken(auth0id: string) {
    const body = {
      auth0id: auth0id,
    };
    return this.httpClient.post<User>(`${baseUrl}/byAuth0`, body, httpOptions);
  }

  fetchUserByUsername(username: string) {
    const body = {
      username: username,
    };
    return this.httpClient.post<User>(`${baseUrl}/username`, body, httpOptions);
  }

  updateUser(user: User) {
    return this.httpClient.put<User>(baseUrl, user, httpOptions);
  }
}
