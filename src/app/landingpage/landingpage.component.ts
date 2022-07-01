import { Component, OnInit } from '@angular/core';
import { Song } from '../shared/models/song.model';
import{ SongService} from '../shared/services/songs.service'

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
public songs: Song[] = [];

  constructor(public SongService:SongService) { }

  onSubmit(id: any) {
    // this.router.navigate(['/package-detail/' + id]);
  }
  ngOnInit(): void {
    this.SongService.getSongList().subscribe((songs) => {
      console.log('songs:',songs);
      this.songs = songs;
    });
  }

  starRating(){

  }
}
