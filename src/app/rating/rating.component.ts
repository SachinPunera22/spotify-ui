import { Component, OnInit ,Inject} from '@angular/core';
import { NgForm } from '@angular/forms';
import { SongService } from './../shared/services/songs.service';
import { UserService } from './../shared/services/user.service';
import { Song } from '../shared/models/song.model';
import { User } from '../shared/models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
  public rating: Number = 0;
  public id: string = '';
  public errorMsg: string = '';
  public loggedIn: boolean = false;
  public User: User = {} as User;

  constructor(
    public SongService: SongService,
    public UserService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private dialogRef: MatDialogRef<RatingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.errorMsg = '';

    this.checkUser();
  }
  checkUser() {
    this.User = JSON.parse(localStorage.getItem('user') || '{}');
    console.log('user:',this.User.username);
    if (!this.User.username) {
      console.log('not logged in');
      this.loggedIn = false;
    } else {
      console.log('logged in');
      this.loggedIn = true;
    }
  }

  updateReview(id: any, data: any) {
    this.SongService.updateReview(id, data).subscribe((review) => {
      if (review) {
        console.log('Review Added for the song');
        this.dialogRef.close();
        window.location.reload();
      }
      else{
        console.log('Review not Added for the song');
      }
    });
  }

  onSubmit(form: NgForm) {
    this.id = this.data._id;
   
    const data = {
      username: form.value.username,
      email: form.value.email,
      totalRatings:form.value.rating,
    };
    if (this.loggedIn) {
      this.updateReview(this.id, data);
      
    } else {
      console.log('data:', data);
      this.UserService.addUser(data).subscribe((res) => {
        if (res) {
          console.log('New user Added',res);

          const user = JSON.stringify({
            username:res.username,
            email:res.email
          })
          localStorage.setItem('user', user);

          this.updateReview(this.id, data);
        } else {
          this.errorMsg = 'Please enter a unique email';
        }
      });
    }
  }
}
