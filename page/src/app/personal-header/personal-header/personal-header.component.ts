import { ViewportScroller } from '@angular/common';
import { Component, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
import { Constantes } from '../../../utils/Constantes';

@Component({
  selector: 'personal-header',
  templateUrl: './personal-header.component.html',
  styleUrls: ['./personal-header.component.scss']
})
export class PersonalHeaderComponent {
  @Output() mode = new EventEmitter<boolean>();

  pathIconMenuWhite: string;
  pathIconMenuBlack: string;

  setDark = false;

  menuIsOpen: boolean = false;

  constructor(private viewportScroller: ViewportScroller) {
    this.pathIconMenuWhite = Constantes.PATH_ICON_WHITE_MENU_HAMBURGUER;
    this.pathIconMenuBlack = Constantes.PATH_ICON_BLACK_MENU_HAMBURGUER;
  }

  receiveMode($event) {
    this.toggleDarkTheme();
  }

  toggleDarkTheme() {
    this.setDark = !this.setDark;
    this.mode.emit(this.setDark);
  }

  onClickScroll(elementId: string) {
    this.viewportScroller.scrollToAnchor(elementId);
    this.clickMenu()
  }

  clickMenu() {
    this.menuIsOpen = !this.menuIsOpen;
  }
}
