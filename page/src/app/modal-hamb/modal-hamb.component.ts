import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-hamb',
  templateUrl: './modal-hamb.component.html',
  styleUrls: ['./modal-hamb.component.scss']
})
export class ModalHambComponent implements OnInit {
  @Output()
  elementoFocado =  new EventEmitter<string>();

  @Input()
  isAtivo: boolean;

  constructor() { }

  ngOnInit(): void {
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
    this.isOpen();
  }

  isOpen(): void {
    const test = document.querySelector('body');

    if (this.isAtivo) {
      test.classList.add('all-screen');
    } else {
    test.classList.remove('all-screen');
    }
  }
}
