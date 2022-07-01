import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Song } from '../models/song.model';

@Injectable({ providedIn: 'root' })
export class SongService {
  songListUrl = 'http://localhost:3000/song';
  addSongUrl = 'http://localhost:3000/song/addSong';
  updateReviewUrl ='http://localhost:3000/song/updateReview'
  constructor(private http: HttpClient) {}

  getSongList(): Observable<Song[]> {
    return this.http.get<Song[]>(this.songListUrl);
  }

  addSong(id: any): Observable<Song> {
    return this.http.get<Song>(this.addSongUrl + '/' + id);
  }

  updateReview(id:any): Observable<Song> {
    return this.http.get<Song>(this.updateReviewUrl + '/' + id);
  }
}
