import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private observableStateLoader = new BehaviorSubject<boolean>(true);

  isLoaderOn(): Observable<boolean> {
    return this.observableStateLoader.asObservable();
  }

  setStateLoader(newState: boolean): void {
    this.observableStateLoader.next(newState);
  }
}
