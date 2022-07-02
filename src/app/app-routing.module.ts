import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { NewsongComponent } from './newsong/newsong.component';
import { ArtistComponent } from './artist/artist.component';
import { RatingComponent } from './rating/rating.component';

const routes: Routes = [
   { path: '', component: LandingpageComponent },
   { path: 'header', component: HeaderComponent },
   { path: 'Newsong', component: NewsongComponent },
   { path: 'Artist', component: ArtistComponent },
   { path: 'Rating/:id', component: RatingComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
