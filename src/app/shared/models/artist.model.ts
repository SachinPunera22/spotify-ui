import { Song } from './song.model';
export interface Artist {
  _id:string;
  artistName: string;
  DOB: string;
  avgRating: number;
  bio: string;
  songs:Song[];
}
