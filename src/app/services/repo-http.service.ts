import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RepoHttpService {
  constructor(private http: HttpClient) {}

  myRepoUrl = `https://api.github.com/user/repos?access_token=${environment.ApiKey}`;
  searchUrl = `https://api.github.com/search/repositories?access_token=${environment.ApiKey}`;

  getMyRepos() {
    return this.http.get(this.myRepoUrl, { params: { visibility: 'public' } });
  }

  getRepos(payload: string) {
    return this.http.get(this.searchUrl, { params: { q: payload } });
  }
}
