import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Song } from '../models/song.model';

@Injectable({ providedIn: 'root' })
export class SongService {
  songListUrl = 'http://localhost:3000/song';
  addSongUrl = 'http://localhost:3000/song';
  updateReviewUrl ='http://localhost:3000/song/updateRating'
  constructor(private http: HttpClient) {}

  getSongList(): Observable<Song[]> {
    return this.http.get<Song[]>(this.songListUrl);
  }

  addSong(data:any): Observable<Song> {
    return this.http.post<Song>(this.addSongUrl,data);
  }

  updateReview(id:any,data:any): Observable<Song> {
    return this.http.put<Song>(this.updateReviewUrl + '/' + id,data);
  }
}
