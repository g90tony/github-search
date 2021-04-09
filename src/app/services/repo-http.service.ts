import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RepoHttpService {
  constructor(private http: HttpClient) {}

  newToken: String = '';

  setToken(token: string) {
    this.newToken = token;
  }

  getMyRepos() {
    return this.newToken !== ''
      ? this.http.get(
          `https://api.github.com/user/repos?access_token=${this.newToken}`,
          {
            params: { visibility: 'public' },
            headers: { Accept: 'application/vnd.github.v3+json' },
          }
        )
      : this.http.get(
          `https://api.github.com/user/repos?access_token=${environment.ApiKey}`,
          {
            params: { visibility: 'public' },
            headers: { Accept: 'application/vnd.github.v3+json' },
          }
        );
  }

  getUserRepos(username: string) {
    return this.newToken !== ''
      ? this.http.get(
          `https://api.github.com/users/${username}/repos?access_token=${this.newToken}`,
          { headers: { Accept: 'application/vnd.github.v3+json' } }
        )
      : this.http.get(`https://api.github.com/users/${username}/repos`, {
          headers: { Accept: 'application/vnd.github.v3+json' },
        });
  }
}
