import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private _router: Router) {
    console.log('The Navbar Component has been created');
  }

  ngOnInit(): void {}

  navigateToSearch(searchValue: string) {
    this._router.navigate(['search', searchValue]);
  }
}
