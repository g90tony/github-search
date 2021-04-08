import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { UserHttpService } from 'src/app/services/user-http.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  constructor(
    private userHttpService: UserHttpService,
    private AuthenticatedUser: User
  ) {}

  authenticatedUser: any;

  ngOnInit(): void {
    this.userHttpService.getMyData().subscribe((userData: any) => {
      this.AuthenticatedUser = this.createNewInstance(userData);
      this.authenticatedUser = this.AuthenticatedUser;
      console.log(this.AuthenticatedUser);
    });
  }

  createNewInstance(data: any) {
    const total_repos = data.total_private_repos + data.public_repos;

    const authenticatedUser = new User(
      data.avatar_url,
      data.bio,
      data.created_at,
      data.email,
      data.hireable,
      data.followers,
      data.following,
      data.location,
      data.name,
      data.twitter,
      total_repos
    );

    return authenticatedUser;
  }
}
