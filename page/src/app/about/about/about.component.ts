import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  @Output()
  elementoFoco = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  pegarNovoFocoCard(elementoFocado: string): void {
    this.elementoFoco.emit(elementoFocado);
  }
}
