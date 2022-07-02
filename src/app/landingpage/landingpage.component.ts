import { Component, OnInit } from '@angular/core';
import { Song } from '../shared/models/song.model';
import{ SongService} from '../shared/services/songs.service'
import{ ArtistService} from '../shared/services/artist.service'

import { Artist } from '../shared/models/artist.model';
@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
public songs: Song[] = [];
public topArtists: Artist[] = [];

  constructor(public SongService:SongService,public ArtistService:ArtistService) { }

  onSubmit(id: any) {
    // this.router.navigate(['/package-detail/' + id]);
  }
  ngOnInit(): void {
    this.SongService.getSongList().subscribe((songs) => {
      console.log('songs:',songs);
      this.songs = songs;
    });
    this.ArtistService. topArtistList().subscribe((Artist) => {
      console.log('songs:',Artist);
      this.topArtists = Artist;
    });


  }

  starRating(){

  }
}
