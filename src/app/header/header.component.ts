import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public User: User = {} as User ;
 public loggedIn:Boolean=false
  constructor(public router:Router) {    

  }
  checkUser() {

    this.User = JSON.parse(localStorage.getItem('user') || '{}');
    console.log('User:',this.User.username);
    if (!this.User.username) {
      console.log('not logged in');
      this.loggedIn = false;
    } else {
      console.log('logged in');
      this.loggedIn = true;
    }
  }

  onLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.loggedIn=false
    this.router.navigate(['']);
  }
  ngOnInit(): void {
    this.checkUser();
  }

}
