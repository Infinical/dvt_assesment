import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { ArtistsComponent } from './artists/artists.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path: '', component: SearchComponent},
  {path: 'artist', component: ArtistsComponent},
  {path: 'details', component: ArtistDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
