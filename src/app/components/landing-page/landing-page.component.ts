import { Component, Input, OnInit } from '@angular/core';
import { Repository } from 'src/app/classes/repository';
import { User } from 'src/app/classes/user';
import { RepoHttpService } from 'src/app/services/repo-http.service';
import { UserHttpService } from 'src/app/services/user-http.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  constructor(
    private userHttpService: UserHttpService,
    private repoHttpService: RepoHttpService,
    private privateUser: User,
    private privateUserRepositories: Array<Repository>
  ) {}

  authenticatedUser: any;
  authenticatedRepositories: any;

  ngOnInit(): void {
    this.userHttpService.getMyData().subscribe((userData: any) => {
      this.privateUser = this.createNewInstance(userData);
      this.authenticatedUser = this.privateUser;

      if (this.authenticatedUser) {
        this.repoHttpService.getMyRepos().subscribe((userRepos: any) => {
          this.privateUserRepositories = this.fetchUserRepos(userRepos);
          this.authenticatedRepositories = this.privateUserRepositories;
        });
      }
    });
  }

  createNewInstance(data: any) {
    const total_repos = data.total_private_repos + data.public_repos;

    const authenticatedUser = new User(
      data.avatar_url,
      data.bio,
      data.created_at,
      data.email,
      data.followers,
      data.following,
      data.location,
      data.hireable,
      data.name,
      ` @${data.twitter_username}`,
      total_repos,
      data.html_url,
      data.login
    );

    return authenticatedUser;
  }

  fetchUserRepos(arr: any) {
    return arr.map((data: any) => {
      const authenticatedRepo = new Repository(
        data.full_name,
        data.language,
        data.homepage,
        data.stargazers_count,
        data.description,
        data.owner.login,
        data.bio,
        data.html_url
      );
      // console.log(authenticatedRepo);
      return authenticatedRepo;
    });
  }
}
