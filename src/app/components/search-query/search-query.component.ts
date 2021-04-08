import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserHttpService } from 'src/app/services/user-http.service';

@Component({
  selector: 'app-search-query',
  templateUrl: './search-query.component.html',
  styleUrls: ['./search-query.component.css'],
})
export class SearchQueryComponent implements OnInit {
  constructor(private userHttpService: UserHttpService) {}

  ngOnInit(): void {}

  onSubmit(search: NgForm) {
    const searched = search.value;

    this.userHttpService.searchUsers(searched.search).subscribe((results) => {
      console.log(results);
    });
  }
}
