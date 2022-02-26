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

  menuEstaAberto(): boolean {
    return this.menuHambuguerAberto;
  }

  getManuHamburguer(): string {
    return Constantes.PATH_ICON_BLACK_MENU_HAMBURGUER;
  }

  clickMenu(): void {
    this.menuHambuguerAberto = !this.menuHambuguerAberto;
  }

  onClickScroll(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
    this.clickMenu();
  }
}
