import { DecimalPipe } from "@angular/common";

export interface Song {
  songName: String;
  coverImage: String;
  artist: String[];
  date: String;
  songRating: Number;
  avgRating: Number;
}
