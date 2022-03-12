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

  changeActive(textContent: string): void {
    const elementos = document.querySelectorAll('.lista__item');
    elementos.forEach(elemento => {
      elemento.classList.remove('active');

      if (elemento.textContent.toLocaleLowerCase().includes(textContent.toLocaleLowerCase())) {
        elemento.classList.add('active');
        this.elementoEmFoco = textContent;
      }
    });
  }
}
