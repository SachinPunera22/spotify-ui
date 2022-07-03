import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Song } from '../shared/models/song.model';
import{ SongService} from '../shared/services/songs.service'
import{ ArtistService} from '../shared/services/artist.service'
import { Artist } from '../shared/models/artist.model';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';

import { RatingComponent } from '../rating/rating.component';
@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
public songs: Song[] = [];
public topArtists: Artist[] = [];

  constructor(public SongService:SongService,public ArtistService:ArtistService, public dialog: MatDialog,public router:Router) { }

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

  openRatingDialog(id:any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.panelClass= "dialog-responsive";
    dialogConfig.backdropClass= "backdropClass";
    dialogConfig.minWidth= 1000;
    dialogConfig.data= {_id:id}
    const dialogRef = this.dialog.open(RatingComponent,dialogConfig)
  
  dialogRef.afterClosed().subscribe(res=>{
    this.router.navigate(['']);
  })
  }
}
