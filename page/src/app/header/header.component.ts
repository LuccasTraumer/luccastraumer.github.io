import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Constantes } from '../../utils/Constantes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  readonly CONSTANTES = Constantes;
  private menuHambuguerAberto = false;

  constructor(private viewportScroller: ViewportScroller) {

  }

  ngOnInit(): void {
  }

  mudarEstadoMenuHamburguer(): void {
    this.menuHambuguerAberto = !this.menuHambuguerAberto;
  }

  getManuHamburguer(): string {
    return Constantes.PATH_ICON_BLACK_MENU_HAMBURGUER;
  }

  onClickScroll(elementId: string) {
    this.viewportScroller.scrollToAnchor(elementId);
    this.clickMenu()
  }

  clickMenu() {
    this.menuHambuguerAberto = !this.menuHambuguerAberto;
  }
}
