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

      console.log(elemento.textContent.toLocaleLowerCase().includes(textContent.toLocaleLowerCase()));
      if (elemento.textContent.toLocaleLowerCase().includes(textContent.toLocaleLowerCase())) {
        elemento.classList.add('active');
        this.elementoFocado.emit(textContent.toLocaleLowerCase());
      }
    });

    this.isOpen();
  }

  isOpen(): void {
    const htmlBodyElement = document.querySelector('body');

    this.isAtivo = !this.isAtivo;
    if (this.isAtivo) {
      htmlBodyElement.classList.add('all-screen');
    } else {
      htmlBodyElement.classList.remove('all-screen');
    }

  }
}
