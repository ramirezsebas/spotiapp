import { Component, OnInit } from '@angular/core';

import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  newReleases: any[] = [];

  error: boolean = false;

  errorMessage: string = '';

  constructor(private _spotifyService: SpotifyService) {
    console.log('The Home Component has been created');
  }

  ngOnInit(): void {
    this.setNewReleases();
  }

  setNewReleases() {
    this._spotifyService.getNewReleases().subscribe(
      (newReleases: any) => {
        this.newReleases = newReleases;
      },
      (error) => {
        this.error = error;
        this.errorMessage = error.error.message;
        console.log(error);
      }
    );
  }
}
