import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RepoHttpService {
  constructor(private http: HttpClient) {}

  getMyRepos() {
    return this.http.get(
      `https://api.github.com/user/repos?access_token=${environment.ApiKey}`,
      { params: { visibility: 'public' } }
    );
  }

  getUserRepos(username: string) {
    return this.http.get(
      `https://api.github.com/users/${username}/repos?access_token=${environment.ApiKey}`
    );
  }
}
