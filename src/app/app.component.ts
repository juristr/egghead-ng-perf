import { Component, ElementRef } from '@angular/core';
import {
  Router,
  RouteConfigLoadStart,
  RouteConfigLoadEnd,
  RouterEvent
} from '@angular/router';
import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loading: boolean;

  constructor(router: Router, private el: ElementRef) {
    this.loading = false;

    router.events.subscribe(
      (event: RouterEvent): void => {
        if (event instanceof RouteConfigLoadStart) {
          this.loading = true;
        } else if (event instanceof RouteConfigLoadEnd) {
          this.loading = false;
        }
      }
    );
  }

  scroll$ = fromEvent(this.el.nativeElement, 'scroll').pipe(
    map((e: MouseEvent) => e.timeStamp),
    tap(_ => console.log('scrolling'))
  );
}
