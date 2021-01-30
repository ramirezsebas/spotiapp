import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  artists: any[] = [];
  value: string = '';

  constructor(
    private _spotifyService: SpotifyService,
    private _activatedRouter: ActivatedRoute
  ) {
    console.log('The Search Component has been created');
    this.saveParams();
  }

  private saveParams() {
    this._activatedRouter.params.subscribe((params) => {
      this.value = params['value'];
    });
  }

  ngOnInit(): void {
    this._spotifyService.searchArtist(this.value).subscribe((data: any) => {
      this.artists = data;
    });
  }
}
