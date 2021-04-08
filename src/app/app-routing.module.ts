import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchQueryComponent } from './components/search-query/search-query.component';
import { LoginComponent } from './components/login/login.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'profile',
    component: LandingPageComponent,
  },
  { path: 'search-query', component: SearchQueryComponent },
  { path: 'search-result', component: SearchResultsComponent },
  { path: 'search-result/view?=:username', component: UserProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
