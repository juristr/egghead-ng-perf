import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <cdk-virtual-scroll-viewport itemSize="18" style="height: 80vh">
      <div *cdkVirtualFor="let item of list">
        {{ item }}
      </div>
    </cdk-virtual-scroll-viewport>
  `
})
export class AppComponent implements OnInit {
  list = Array.from({ length: 100000 }).map((_, i) => i);

  constructor() {}

  ngOnInit() {}
}
