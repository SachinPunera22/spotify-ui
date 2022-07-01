import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Song } from '../shared/models/song.model';
import{ SongService} from '../shared/services/songs.service'
import{ ArtistService} from '../shared/services/artist.service'

import { Artist } from '../shared/models/artist.model';
@Component({
  selector: 'app-newsong',
  templateUrl: './newsong.component.html',
  styleUrls: ['./newsong.component.css']
})
export class NewsongComponent implements OnInit {
  public Artists: Artist[] = [];
  public   selected = [{ id: 3, name: "Volkswagen Ford" }];
  constructor(public SongService:SongService,public ArtistService:ArtistService) { }

  ngOnInit(): void {
    this.ArtistService.artistList().subscribe((artists) => {
      console.log('artists:',artists);
      this.Artists = artists;
    });
  }
  onSubmit(form: NgForm) {
    const data = {
      songName: form.value.name,
      coverImage: form.value.coverImage,
      // artist: String[];
      date: form.value.date
     
    };
    console.log('data',data);
  }
}
