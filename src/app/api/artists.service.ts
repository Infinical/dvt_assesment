import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
interface SearchResponse {
  data: any[];
  next: string;
  total: number;
}
@Injectable({
  providedIn: 'root',
})
export class ArtistsService {
  constructor(private http: HttpClient) {}

  searchArtist(name: string): Observable<any> {
    return this.http
      .get<SearchResponse>(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search`,
        {
          params: new HttpParams()
            .set('q', `artist:"${name}"`)
            .set('response_type', 'token'),
        }
      )
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  getArtistDetails(id: string): Observable<any>{
    return this.http
    .get<SearchResponse>(
      `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}`
    )
    .pipe(
      retry(2),
      catchError(this.handleError));
  }

  getTopSongs(id: string): Observable<any> {
    return this.http
      .get<SearchResponse>(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/top`
      )
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  getAlbums(id: string) :Observable<any> {
    return this.http
      .get<SearchResponse>(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/albums`
      )
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
