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
  constructor() { }

  ngOnInit(): void {
  }

  mudarEstadoMenuHamburguer(): void {
    this.menuHambuguerAberto = !this.menuHambuguerAberto;
  }

  getManuHamburguer(): string {
    return Constantes.PATH_ICON_BLACK_MENU_HAMBURGUER;
  }
}
