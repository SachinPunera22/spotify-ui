import { SongService } from './../shared/services/songs.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Song } from '../shared/models/song.model';
import { Router } from '@angular/router';

import{ ArtistService} from '../shared/services/artist.service'

import { Artist } from '../shared/models/artist.model';
@Component({
  
  selector: 'app-newsong',
  templateUrl: './newsong.component.html',
  styleUrls: ['./newsong.component.css']
})
export class NewsongComponent implements OnInit {
  public Artists: Artist[] = [];
  public selected : Artist[] = [];
  constructor(public SongService:SongService,public ArtistService:ArtistService,private router: Router,) { }

  ngOnInit(): void {
    this.ArtistService.artistList().subscribe((artists) => {
      console.log('artists:',artists);
      this.Artists = artists;
    });

  }
  onSubmit(form: NgForm) {

    const data = {
      songName: form.value.songName,
      coverImage: form.value.coverImage,
     artist:  form.value.artist,
      date: form.value.date
    }
      console.log('data:',data);
     this.SongService.addSong(data).subscribe((song)=>{
      if(song){
        console.log('Song is added successfully');
         this.router.navigate(['']);
      }
      else{
        console.log('Error in adding new song');
      }
     })

    };
    
  }

