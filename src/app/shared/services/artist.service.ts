import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Artist } from '../models/artist.model';
@Injectable({
  providedIn: 'root',
})
export class ArtistService {
  addArtistUrl = 'http://localhost:3000/artist';
  artistListUrl = 'http://localhost:3000/artist';
topArtistListUrl = 'http://localhost:3000/artist';


  constructor(private http: HttpClient) {}

  artistList(): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.artistListUrl);
  }

  topArtistList(): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.topArtistListUrl);
  }

  addArtist(data: any): Observable<Artist> {
    return this.http.post<Artist>(this.addArtistUrl , data);
  }
}
