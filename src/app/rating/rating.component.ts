

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SongService } from './../shared/services/songs.service';
import { UserService } from './../shared/services/user.service';
import { Song } from '../shared/models/song.model';
import { User } from '../shared/models/user.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  public rating: Number = 0;
  public id:string ="";
  public errorMsg: string ="";
  constructor(public SongService:SongService, public UserService:UserService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.errorMsg= ""
  }
  onSubmit(form:NgForm){
  
    this.id = this.route.snapshot.params['id'];
      const data={
        username:form.value.username,
        email:form.value.email,
        rating: this.rating
      }
      console.log('data:',data);
      this.UserService.addUser(data).subscribe((user)=>{
        if(user){
          console.log('New user Added');
          this.SongService.updateReview(this.id, data).subscribe((review)=>{
            if(review){
              console.log('Review Added for the song');
            }
          })
        }
        else{
         this.errorMsg="Please enter a unique email"
        }
      })
     

      
  }

}
