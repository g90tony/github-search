import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Repository } from 'src/app/classes/repository';
import { User } from 'src/app/classes/user';
import { RepoHttpService } from 'src/app/services/repo-http.service';
import { UserHttpService } from 'src/app/services/user-http.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  constructor(
    private userHttpService: UserHttpService,
    private repoHttpService: RepoHttpService,
    private randomUser: User,
    private route: ActivatedRoute,
    private randomUserRepositories: Array<Repository>,
    private location: Location
  ) {}

  authenticatedUser: any;
  authenticatedRepositories: any;

  ngOnInit(): void {
    let username: any = this.route.snapshot.paramMap.get('username');

    this.userHttpService.getUserData(username).subscribe((userData: any) => {
      this.randomUser = this.createNewInstance(userData);
      this.authenticatedUser = this.randomUser;

      if (this.authenticatedUser) {
        this.repoHttpService
          .getUserRepos(username)
          .subscribe((userRepos: any) => {
            this.randomUserRepositories = this.fetchUserRepos(userRepos);
            this.authenticatedRepositories = this.randomUserRepositories;
          });
      }
    });
  }

  loadPrevPage() {
    this.location.back();
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
      total_repos,
      data.html_url
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
      console.log(authenticatedRepo);
      return authenticatedRepo;
    });
  }
}
