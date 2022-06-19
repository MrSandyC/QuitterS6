import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Queet } from '../models/queet';
import { User } from '../models/user';

const baseUrl = `${environment.apiURL}/queet`;
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class QueetService {
  token!: any;
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.token}`
  });
  constructor(private httpClient: HttpClient, private auth: AuthService) {
    this.auth.idTokenClaims$.subscribe((claims) => {
      console.log(claims?.__raw);
      this.token = claims?.__raw;
      httpOptions.headers.set('Authorization', `Bearer ${claims?.__raw}`);
    });
  }

  fetchQueets() {
    return this.httpClient.get<Queet[]>(baseUrl, {headers: this.headers});
  }

  fetchQueetsByUserId(id: number) {
    return this.httpClient.get<Queet[]>(`${baseUrl}/profile/${id}`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }

  postQueet(queet: Queet): Observable<Queet> {
    const user = this.httpClient.get<User>(`${environment.apiURL}/user`)
    return this.httpClient.post<Queet>(baseUrl, queet, httpOptions);
  }
}
