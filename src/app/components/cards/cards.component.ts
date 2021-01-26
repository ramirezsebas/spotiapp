import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
})
export class CardsComponent implements OnInit {
  @Input() items: any[] = [];
  constructor(private _router: Router) {
    console.log('The Card Component has been created');
  }

  ngOnInit(): void {}

  navToProfile(item: any) {
    let artistId = item.type === 'artist' ? item.id : item.artists[0].id;
    this._router.navigate(['artist', artistId]);
  }
}
