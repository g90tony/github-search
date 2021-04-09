import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(private route: Router) {}

  loadHome() {
    this.route.navigate(['/']);
  }
  searchQuery() {
    this.route.navigate(['/search-query']);
  }
  loadProfile() {
    this.route.navigate(['/profile']);
  }

  ngOnInit(): void {}
}
