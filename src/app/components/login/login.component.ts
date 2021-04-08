import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RepoHttpService } from 'src/app/services/repo-http.service';
import { UserHttpService } from 'src/app/services/user-http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private userHttpService: UserHttpService,
    private repoHttpService: RepoHttpService
  ) {}

  ngOnInit(): void {}

  onSubmit(token: NgForm) {
    const newToken = token.value;

    this.userHttpService.setToken(newToken);
    this.repoHttpService.setToken(newToken);
  }
}
