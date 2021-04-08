import { Component, Input, OnInit } from '@angular/core';
import { UserHttpService } from 'src/app/services/user-http.service';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css'],
})
export class UserItemComponent implements OnInit {
  constructor(private userHttpService: UserHttpService) {}

  UsersData: Array<any> = [];

  @Input() results: any;

  ngOnInit(): void {
    this.results.forEach((element: any) => {
      element.forEach((data: any) => {
        this.fetchUser(data.login);
      });
    });

    console.log(this.UsersData);
  }

  fetchUser(payload: any) {
    this.userHttpService.getUserDetails(payload).subscribe((data: any) => {
      console.log(data);
      this.UsersData.push(data);
    });
  }
}
