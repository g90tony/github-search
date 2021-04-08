import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserHttpService {
  constructor(private http: HttpClient) {}

  ApiUrl = 'https://api.github.com';
  MyDataUrl = `${this.ApiUrl}/user?access_token=${environment.ApiKey}`;
  SearchAllUrl = `${this.ApiUrl}/search/users?access_token=${environment.ApiKey}`;

  private items: any = [];

  getItems() {
    return this.items;
  }

  setItems(newItems: any) {
    this.items.push(newItems);
  }

  getMyData() {
    return this.http.get(this.MyDataUrl);
  }

  getUserData(username: string) {
    return this.http.get(
      `${this.ApiUrl}/users/${username}?access_token=${environment.ApiKey}`
    );
  }

  searchUsers(payload: string) {
    return this.http.get(this.SearchAllUrl, {
      params: { q: payload },
    });
  }

  getUserDetails(userName: any) {
    console.log(userName);
    return this.http.get(
      `${this.ApiUrl}/users/${userName}?access_token=${environment.ApiKey}`
    );
  }
}
