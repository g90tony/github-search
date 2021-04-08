import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserHttpService {
  constructor(private http: HttpClient, private token: String) {}

  ApiUrl = 'https://api.github.com';

  private items: any = [];

  getItems() {
    return this.items;
  }

  setItems(newItems: any) {
    this.items.push(newItems);
  }

  setToken(token: string) {
    this.token = token;
  }

  getMyData() {
    return this.token
      ? this.http.get(`${this.ApiUrl}/user?access_token=${environment.ApiKey}`)
      : this.http.get(`${this.ApiUrl}/user?access_token=${this.token}`);
  }

  getUserData(username: string) {
    return this.token
      ? this.http.get(
          `${this.ApiUrl}/users/${username}?access_token=${this.token}`
        )
      : this.http.get(
          `${this.ApiUrl}/users/${username}?access_token=${environment.ApiKey}`
        );
  }

  searchUsers(payload: string) {
    return this.token
      ? this.http.get(
          `${this.ApiUrl}/search/users?access_token=${this.token}`,
          {
            params: { q: payload },
          }
        )
      : this.http.get(`${this.ApiUrl}/search/users`, {
          params: { q: payload },
        });
  }

  getUserDetails(userName: any) {
    return this.token
      ? this.http.get(
          `${this.ApiUrl}/users/${userName}?access_token=${environment.ApiKey}`
        )
      : this.http.get(`${this.ApiUrl}/users/${userName}`);
  }
}
