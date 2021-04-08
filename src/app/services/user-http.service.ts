import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserHttpService {
  constructor(private http: HttpClient) {}

  ApiUrl = 'https://api.github.com';

  url = `${this.ApiUrl}/user?access_token=${environment.ApiKey}`;

  getMyData() {
    return this.http.get(this.url);
  }
}
