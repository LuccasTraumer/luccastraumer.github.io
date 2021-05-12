import { ViewportScroller } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Constantes } from '../../../utils/Constantes';

@Component({
  selector: 'personal-header',
  templateUrl: './personal-header.component.html',
  styleUrls: ['./personal-header.component.scss']
})
export class PersonalHeaderComponent {
  @Output() mode = new EventEmitter<boolean>();

  setDark = false;

  pathIconMenuWhite: string;
  pathIconMenuBlack: string;

  menuIsOpen: boolean = false;

  constructor(private viewportScroller: ViewportScroller) {
    this.pathIconMenuWhite = Constantes.PATH_ICON_WHITE_MENU_HAMBURGUER;
    this.pathIconMenuBlack = Constantes.PATH_ICON_BLACK_MENU_HAMBURGUER;
  }

  onClickScroll(elementId: string) {
    this.viewportScroller.scrollToAnchor(elementId);
    this.clickMenu()
  }

  toggleDarkTheme() {
    this.setDark = !this.setDark;
    this.mode.emit(this.setDark);
  }

  clickMenu() {
    this.menuIsOpen = !this.menuIsOpen;
    console.log(this.menuIsOpen);
  }
}
