import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserHttpService } from 'src/app/services/user-http.service';

@Component({
  selector: 'app-search-query',
  templateUrl: './search-query.component.html',
  styleUrls: ['./search-query.component.css'],
})
export class SearchQueryComponent implements OnInit {
  constructor(
    private userHttpService: UserHttpService,
    private route: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(search: NgForm) {
    const searched = search.value;
    this.userHttpService.searchUsers(searched.search).subscribe((res: any) => {
      if (res) {
        const items = res.items.map((item: any) => {
          return item;
        });
        this.userHttpService.setItems(items);
        this.loadSearchResult();
      }
    });
  }

  loadSearchResult() {
    this.route.navigate(['/search-results']);
  }
}
