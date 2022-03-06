import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'page';

  elementoEmFoco: string;
  isOpenMenuHamburguer: boolean;

  mudarElementoPrincipal(elementoFocado: string): void {
    this.elementoEmFoco = elementoFocado;
  }

  isMenuOpen(isOpen: boolean): void {
    const test = document.querySelector('body');
    this.isOpenMenuHamburguer = isOpen;

    if (isOpen) {
      test.classList.add('all-screen');
    } else {
      test.classList.remove('all-screen');
    }
  }
}
