import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RepoHttpService {
  authToken: String = environment.ghAccessKey;

  constructor(private http: HttpClient) {}

  setToken(token: string) {
    this.authToken = token;
  }

  getMyRepos() {
    return this.authToken !== ''
      ? this.http.get(
          `https://api.github.com/user/repos?access_token=${this.authToken}`,
          {
            params: { visibility: 'public' },
            headers: {
              Accept: 'application/vnd.github.v3+json',
            },
          }
        )
      : this.http.get(
          `https://api.github.com/user/repos?access_token=${environment.ghAccessKey}`,
          {
            params: { visibility: 'public' },
            headers: {
              Accept: 'application/vnd.github.v3+json',
            },
          }
        );
  }

  getUserRepos(username: string) {
    return this.authToken !== ''
      ? this.http.get(
          `https://api.github.com/users/${username}/repos?access_token=${this.authToken}`,
          {
            headers: {
              Accept: 'application/vnd.github.v3+json',
            },
          }
        )
      : this.http.get(`https://api.github.com/users/${username}/repos`, {
          headers: {
            Accept: 'application/vnd.github.v3+json',
          },
        });
  }
}
