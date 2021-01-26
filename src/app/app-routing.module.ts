import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistProfileComponent } from './components/artist-profile/artist-profile.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'search/:value',
    component: SearchComponent,
  },
  {
    path: 'artist/:id',
    component: ArtistProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
