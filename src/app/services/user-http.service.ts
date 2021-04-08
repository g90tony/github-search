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

  getMyData() {
    return this.http.get(this.MyDataUrl);
  }

  searchUsers(payload: string) {
    return this.http.get(this.SearchAllUrl, { params: { q: payload } });
  }
}
