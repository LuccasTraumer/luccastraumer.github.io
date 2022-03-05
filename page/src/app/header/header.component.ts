import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output()
  elementoFocado =  new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    // TODO: Alterar para deixar o about
    this.changeActive('projects');
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
}
