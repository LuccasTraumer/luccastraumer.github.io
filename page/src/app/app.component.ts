import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Output() mode = new EventEmitter<boolean>();
  setDark = false;

  title = 'page';

  toggleDarkTheme() {
    this.setDark = !this.setDark;
    this.mode.emit(this.setDark);
  }

  receiveMode($event) {
    this.toggleDarkTheme();
  }
}
