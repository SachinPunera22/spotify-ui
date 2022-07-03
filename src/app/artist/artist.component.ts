import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import{ ArtistService} from '../shared/services/artist.service'
import { Artist } from '../shared/models/artist.model';

import{MatDialogRef}from '@angular/material/dialog';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  public Artists: Artist[] = [];
  public formSubmitted:boolean=false
  constructor(public ArtistService:ArtistService,private router: Router,private dialogRef: MatDialogRef<ArtistComponent>) { }

  ngOnInit(): void {
    this.ArtistService.artistList().subscribe((artists) => {
      console.log('artists:',artists);
      this.Artists = artists;
    });

  }
  onSubmit(form: NgForm) {

    const data = {
      artistName: form.value.artistName,
      DOB: form.value.DOB,
     bio:  form.value.bio,
      
    }
      console.log('data:',data);
     this.ArtistService.addArtist(data).subscribe((artist)=>{
      if(artist){
        console.log('Song is added successfully');
        this.dialogRef.close();
         }
      else{
        console.log('Error in adding new song');
      }
     })

    };
    
  }

