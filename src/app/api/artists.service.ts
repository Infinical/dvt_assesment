import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
interface SearchResponse{
  data: any[];
  next: string;
  total: number;
}
@Injectable({
  providedIn: 'root'
})


export class ArtistsService {

  constructor(private http: HttpClient) { }

  searchArtist(name:string){
    return this.http.get<SearchResponse>(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search`,{params: new HttpParams().set('q',`artist:"${name}"`).set('response_type','token')})
  }

  getTopSongs(id:string){
    return this.http.get<SearchResponse>(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/top`)
  }

  getAlbums(id:string){
    return this.http.get<SearchResponse>(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/albums`)
  }
}
