import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output()
  elementoFocado =  new EventEmitter<string>();

  @Output()
  isHamburguerAberto = new EventEmitter<boolean>();

  isMenuHamburguerOpen = false;

  constructor() { }

  ngOnInit(): void {
    this.changeActive('about');
  }

  changeActive(textContent: string): void {
    const elementos = document.querySelectorAll('.lista__item');
    elementos.forEach(elemento => {
      elemento.classList.remove('active');

      if (elemento.textContent.toLocaleLowerCase().includes(textContent.toLocaleLowerCase())) {
        elemento.classList.add('active');
        this.elementoFocado.emit(textContent.toLocaleLowerCase());
      }
    });
  }

  changeManuHamb(): void {
    this.isMenuHamburguerOpen = !this.isMenuHamburguerOpen;
    this.isHamburguerAberto.emit(this.isMenuHamburguerOpen);
  }
}
