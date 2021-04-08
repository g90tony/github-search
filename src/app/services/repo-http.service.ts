import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RepoHttpService {
  constructor(private http: HttpClient) {}

  url = `https://api.github.com/user/repos?access_token=${environment.ApiKey}`;

  getMyRepos() {
    return this.http.get(this.url, { params: { visibility: 'public' } });
  }
}
