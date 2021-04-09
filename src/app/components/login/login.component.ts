import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
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
    private repoHttpService: RepoHttpService,
    private route: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(token: NgForm) {
    if (token.value) {
      this.userHttpService.setToken(token.value.token);
      this.repoHttpService.setToken(token.value.token);

      this.route.navigate(['/profile']);
    }
  }
}
