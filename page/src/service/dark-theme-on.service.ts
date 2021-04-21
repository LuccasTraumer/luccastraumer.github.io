import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkThemeOnService {
  private white: string = '#ffffff';
  private black: string = '#141313';

  private _themeDark: Subject<boolean> = new Subject<boolean>();
  isThemeDark = this._themeDark.asObservable();

  constructor() { }

  setDarkTheme(isThemeDark: boolean) {
    this._themeDark.next(isThemeDark);

    if (isThemeDark == true) {
      console.log('Dark Used');
      document.documentElement.style.setProperty('#ligth-theme', this.black);
      document.documentElement.style.setProperty('#dark-theme', this.white);
      localStorage.setItem('dark', 'true');
    }
    else {
      console.log('Light Used');
      document.documentElement.style.setProperty('#ligth-theme', this.black);
      document.documentElement.style.setProperty('#dark-theme', this.white);
      localStorage.setItem('dark', 'false');
    }
  }
}
