import { Component, Input, OnInit } from '@angular/core';
import { UserHttpService } from 'src/app/services/user-http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit {
  constructor(
    private userHttpService: UserHttpService,
    private router: Router
  ) {}

  searchResults: Array<Object> = this.userHttpService.getItems();

  ngOnInit(): void {
    const usernames: Array<Object> = [];
    let counter = 0;
    this.searchResults.map((element: any) => {
      usernames[counter] = element;
      counter++;
      return;
    });

    console.log(usernames);
  }

  goToProfile(userName: string) {
    this.router.navigate(['/user-profile', userName]);
  }
}
