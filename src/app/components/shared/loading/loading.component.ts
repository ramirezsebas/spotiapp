import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
})
export class LoadingComponent implements OnInit {
  @Input() loading: boolean = true;
  @Input() message: string | undefined;
  constructor() {
    console.log('The Loading Component has been created');
  }

  ngOnInit(): void {}
}
