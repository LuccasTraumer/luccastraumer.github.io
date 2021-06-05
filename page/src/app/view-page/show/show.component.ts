import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent {
  @Output() mode = new EventEmitter<boolean>();

  setDark = false;

  isDarkModeOn: boolean;

  constructor() {
  }

  receiveMode($event) {
    this.isDarkModeOn = $event;
  }

  toggleDarkTheme() {
    this.setDark = !this.setDark;
    sessionStorage.setItem('darkMode', `${this.setDark}`);
    this.mode.emit(this.setDark);
  }
}
