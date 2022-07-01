import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { artist } from '../models/artist.model';
@Injectable({
  providedIn: 'root',
})
export class artistService {
  AddArtistUrl = 'http://localhost:3000/package';
  NewArtistDetails = 'http://localhost:3000/package/packageDetail';

  constructor(private http: HttpClient) {}

  all(): Observable<artist[]> {
    return this.http.get<artist[]>(this.AddArtistUrl);
  }

  getartist(id: any): Observable<artist> {
    return this.http.get<artist>(this.NewArtistDetails + '/' + id);
  }
}
