import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';

import { SearchQueryComponent } from './components/search-query/search-query.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { RepoItemComponent } from './components/repo-item/repo-item.component';
import { SearchLandingComponent } from './components/search-landing/search-landing.component';
import { RepoHttpService } from './services/repo-http.service';
import { UserHttpService } from './services/user-http.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavBarComponent,
    SearchResultsComponent,
    SearchQueryComponent,
    UserItemComponent,
    RepoItemComponent,
    SearchLandingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [RepoHttpService, UserHttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
