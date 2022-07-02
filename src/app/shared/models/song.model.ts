import { Artist } from './artist.model';
export interface Song {
  _id:string;
  songName: string;
  coverImage: String;
  artist:  Artist[]
  date: String;
  songRating: Number;
  avgRating: Number;
}
