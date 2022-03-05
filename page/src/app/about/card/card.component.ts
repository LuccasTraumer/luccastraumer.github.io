import { Component, OnInit } from '@angular/core';
import { Constantes } from '../../../utils/Constantes';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  readonly CONSTANTES = Constantes;
  constructor() { }

  ngOnInit(): void {
  }

}
