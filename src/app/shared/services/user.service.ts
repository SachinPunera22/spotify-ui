import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

 
  addUserUrl = 'http://localhost:3000/user';
  
  constructor(private http: HttpClient) {}

 addUser(data:any): Observable<any> {
    return this.http.post<any>(this.addUserUrl,data);
  }

 
}
