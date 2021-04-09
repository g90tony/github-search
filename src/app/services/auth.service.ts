import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserHttpService } from './user-http.service';
import { RepoHttpService } from './repo-http.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private userHttpService: UserHttpService,
    private repoHttpService: RepoHttpService
  ) {}

  setToken(token: any) {
    this.userHttpService.setToken(token);
    this.repoHttpService.setToken(token);
  }

  fetchToken() {
    const res = this.requestUserAccess();

    res.subscribe((data: any) => {
      const tempCode: any = data.code;

      const tokenRequest = this.generateAuthorizationToken(tempCode);

      tokenRequest.subscribe((data: any) => {
        this.setToken(data.access_token);
      });
    });
  }

  requestUserAccess() {
    return this.http.get('https://github.com/login/oauth/authorize', {
      headers: { Accept: 'application/json' },
      params: { client_id: environment.clientID },
    });
  }

  generateAuthorizationToken(code: any) {
    return this.http.post('https://github.com/login/oauth/access_token', {
      params: {
        client_id: environment.clientID,
        client_secret: environment.client_secret,
        code,
      },
    });
  }
}
