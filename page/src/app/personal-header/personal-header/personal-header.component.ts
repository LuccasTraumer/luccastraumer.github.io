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

  pathIconMenu: string;

  menuIsOpen: boolean = false;

  constructor(private viewportScroller: ViewportScroller) {
    this.pathIconMenu = this.setDark ? Constantes.PATH_ICON_WHITE_MENU_HAMBURGUER : Constantes.PATH_ICON_BLACK_MENU_HAMBURGUER;
    console.log(this.pathIconMenu)
  }

  onClickScroll(elementId: string) {
    this.viewportScroller.scrollToAnchor(elementId);
    this.clickMenu()
  }

  toggleDarkTheme() {
    this.setDark = !this.setDark;
    this.mode.emit(this.setDark);
    this.pathIconMenu = this.setDark ? Constantes.PATH_ICON_WHITE_MENU_HAMBURGUER : Constantes.PATH_ICON_BLACK_MENU_HAMBURGUER;
  }

  clickMenu() {
    this.menuIsOpen = !this.menuIsOpen;
    console.log(this.menuIsOpen);
  }

}
