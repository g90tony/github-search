import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchQueryComponent } from './components/search-query/search-query.component';
import { SearchLandingComponent } from './components/search-landing/search-landing.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  { path: 'search', component: SearchLandingComponent },
  { path: 'search-query', component: SearchQueryComponent },
  { path: 'search-results', component: SearchResultsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
