import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist-profile',
  templateUrl: './artist-profile.component.html',
})
export class ArtistProfileComponent implements OnInit {
  artist: any;
  id: string = '';
  artistTopTracks: any[] = [];

  constructor(
    private _spotifyService: SpotifyService,
    private _activatedRouter: ActivatedRoute,
    private _router: Router
  ) {
    console.log('The Artist Profile Component has been created');
    this.saveParams();
  }

  private saveParams() {
    this._activatedRouter.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.searchArtist();
    this.topTracks();
  }

  regresar() {
    this._router.navigate(['/']);
  }

  topTracks() {
    this._spotifyService
      .getArtistTopTrack(this.id, 'PY')
      .subscribe((data: any) => {
        this.artistTopTracks = data;
        console.log(this.artistTopTracks);
      });
  }

  searchArtist() {
    this._spotifyService.findArtist(this.id).subscribe((data: any) => {
      if (data) {
        this.artist = data;
      }
    });
  }
}
