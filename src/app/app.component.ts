import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div *ngFor="let item of list">
      {{ item }}
    </div>
  `
})
export class AppComponent implements OnInit {
  list = Array.from({ length: 100000 }).map((_, i) => i);

  constructor() {}

  ngOnInit() {}
}
