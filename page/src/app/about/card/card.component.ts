import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Constantes } from '../../../utils/Constantes';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Output()
  resumeFoco = new EventEmitter<string>();

  readonly CONSTANTES = Constantes;
  constructor() { }

  ngOnInit(): void {
  }

  mudarFocoTela(elementoFocado: string): void {
    this.resumeFoco.emit(elementoFocado);
  }
}
