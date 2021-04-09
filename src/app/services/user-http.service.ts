import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserHttpService {
  constructor(private http: HttpClient) {}

  ApiUrl = 'https://api.github.com';
  private token: String = '';
  private items: any = [];

  getItems() {
    return this.items;
  }

  hasToken() {
    return this.token !== null || undefined ? true : false;
  }

  setItems(newItems: any) {
    this.items.push(newItems);
  }

  setToken(token: string) {
    this.token = token;
  }

  getMyData() {
    return this.token !== ''
      ? this.http.get(`${this.ApiUrl}/user?access_token=${this.token}`, {
          headers: { Accept: 'application/vnd.github.v3+json' },
        })
      : this.http.get(
          `${this.ApiUrl}/user?access_token=${environment.ApiKey}`,
          { headers: { Accept: 'application/vnd.github.v3+json' } }
        );
  }

  getUserData(username: string) {
    return this.token !== ''
      ? this.http.get(
          `${this.ApiUrl}/users/${username}?access_token=${this.token}`,
          { headers: { Accept: 'application/vnd.github.v3+json' } }
        )
      : this.http.get(
          `${this.ApiUrl}/users/${username}?access_token=${environment.ApiKey}`,
          { headers: { Accept: 'application/vnd.github.v3+json' } }
        );
  }

  searchUsers(payload: string) {
    return this.token !== ''
      ? this.http.get(
          `${this.ApiUrl}/search/users?access_token=${this.token}`,
          {
            headers: { Accept: 'application/vnd.github.v3+json' },
            params: { q: payload },
          }
        )
      : this.http.get(`${this.ApiUrl}/search/users`, {
          headers: { Accept: 'application/vnd.github.v3+json' },
          params: { q: payload },
        });
  }

  getUserDetails(userName: any) {
    return this.token !== ''
      ? this.http.get(`${this.ApiUrl}/users/${userName}`)
      : this.http.get(
          `${this.ApiUrl}/users/${userName}?access_token=${environment.ApiKey}`,
          { headers: { Accept: 'application/vnd.github.v3+json' } }
        );
  }
}
