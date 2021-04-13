import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserHttpService {
  authToken: String = environment.ghAccessKey;
  ApiUrl = 'https://api.github.com';
  private items: any = [];

  constructor(private http: HttpClient) {}

  setToken(token: string) {
    this.authToken = token;
  }

  getItems() {
    return this.items;
  }

  setItems(newItems: any) {
    this.items.push(newItems);
  }

  getMyData() {
    return this.authToken !== ''
      ? this.http.get(`${this.ApiUrl}/user?access_token=${this.authToken}`, {
          headers: {
            Accept: 'application/vnd.github.v3+json',
          },
        })
      : this.http.get(
          `${this.ApiUrl}/user?access_token=${environment.ghAccessKey}`,
          {
            headers: {
              Accept: 'application/vnd.github.v3+json',
            },
          }
        );
  }

  getUserData(username: string) {
    return this.authToken !== ''
      ? this.http.get(
          `${this.ApiUrl}/users/${username}?access_token=${this.authToken}`,
          {
            headers: {
              Accept: 'application/vnd.github.v3+json',
            },
          }
        )
      : this.http.get(
          `${this.ApiUrl}/users/${username}?access_token=${environment.ghAccessKey}`,
          {
            headers: {
              Accept: 'application/vnd.github.v3+json',
            },
          }
        );
  }

  searchUsers(payload: string) {
    return this.authToken !== ''
      ? this.http.get(
          `${this.ApiUrl}/search/users?access_token=${this.authToken}`,
          {
            headers: {
              Accept: 'application/vnd.github.v3+json',
            },
            params: { q: payload },
          }
        )
      : this.http.get(`${this.ApiUrl}/search/users`, {
          headers: {
            Accept: 'application/vnd.github.v3+json',
          },
          params: { q: payload },
        });
  }

  getUserDetails(userName: any) {
    return this.authToken !== ''
      ? this.http.get(`${this.ApiUrl}/users/${userName}`)
      : this.http.get(
          `${this.ApiUrl}/users/${userName}?access_token=${environment.ghAccessKey}`,
          {
            headers: {
              Accept: 'application/vnd.github.v3+json',
            },
          }
        );
  }
}
