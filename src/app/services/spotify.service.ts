import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private _http: HttpClient) {
    console.log('The SpotifyService has been created');
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const header = {
      Authorization: 'Bearer [ACA DEBE IR TU CLAVE]',
    };

    return this._http.get(url, {
      headers: header,
    });
  }

  searchArtist(
    searchvalue: string,
    type: string = 'artist',
    limit: number = 20
  ) {
    return this.getQuery(
      `search?q=${searchvalue}&type=${type}&limit=${limit}`
    ).pipe(
      map((data: any) => {
        return data.artists.items;
      })
    );
  }

  findArtist(id: string) {
    return this.getQuery(`artists/${id}`).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  getArtistTopTrack(id: string, country: string) {
    return this.getQuery(`artists/${id}/top-tracks?market=${country}`).pipe(
      map((data: any) => {
        return data.tracks;
      })
    );
  }

  findArtistAlbum = (id: string) => this.getQuery(`artists/${id}/albums`);

  getNewReleases(country: string = 'PY', limit: number = 20) {
    return this.getQuery(
      `browse/new-releases?country=${country}&limit=${limit}`
    ).pipe(
      map((data: any) => {
        return data.albums.items;
      })
    );
  }
}
