import { ViewportScroller } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'personal-header',
  templateUrl: './personal-header.component.html',
  styleUrls: ['./personal-header.component.scss']
})
export class PersonalHeaderComponent {
  @Output() mode = new EventEmitter<boolean>();

  setDark = false;

  constructor(private viewportScroller: ViewportScroller) { }

  onClickScroll(elementId: string) {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  toggleDarkTheme() {
    this.setDark = !this.setDark;
    this.mode.emit(this.setDark);
    sessionStorage.setItem('darkModeOn', `${this.setDark}`)
  }
}
