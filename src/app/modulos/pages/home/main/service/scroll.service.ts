import { Injectable, NgZone } from '@angular/core';
import { debounceTime, fromEvent, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  constructor(private ngZone: NgZone) {}

  onScroll(): Observable<Event> {
    return new Observable((observer) => {
      this.ngZone.runOutsideAngular(() => {
        const scrollEvent = fromEvent(window, 'scroll')
          .pipe(debounceTime(200))
          .subscribe(observer);

        return () => scrollEvent.unsubscribe();
      });
    });
  }
}
